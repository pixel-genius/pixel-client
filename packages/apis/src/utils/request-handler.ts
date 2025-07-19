import { ZodTypeAny, z } from "zod";

import { ApiResponse } from "../types/api.types";
import delay from "./delay";
import { generateMockResponse } from "./mock";

export type RequestHandlerOptions = {
  isMock?: boolean;
};

export type RequestHandlerProps<T extends ZodTypeAny = ZodTypeAny> = [
  callback: () => Promise<ApiResponse<z.infer<T>>>,
  schema: T,
  options?: RequestHandlerOptions | undefined,
];

export const requestHandler = async <T extends ZodTypeAny>(
  ...props: RequestHandlerProps<T>
) => {
  const [callback, schema, options = {}] = props;
  const isMock =
    (process.env.NEXT_PUBLIC_MOCK === "true" || options.isMock) ?? false;

  if (isMock && process.env.NODE_ENV === "development") {
    const { generateMock } = await import("@anatine/zod-mock");
    const mockData = generateMockResponse<z.infer<typeof schema>>({
      data: generateMock(schema),
    });

    return await delay<ApiResponse<z.infer<typeof schema>>>({
      data: mockData,
    });
  }

  return await callback();
};

export default requestHandler;
