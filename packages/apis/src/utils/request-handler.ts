import { generateMock } from "@anatine/zod-mock";
import { z, ZodTypeAny } from "zod";
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
  const { isMock = false } = options;

  const mockData = generateMockResponse<z.infer<typeof schema>>({
    data: generateMock(schema),
  });

  if (isMock)
    return await delay<ApiResponse<z.infer<typeof schema>>>({
      data: mockData,
    });

  return await callback();
};

export default requestHandler;
