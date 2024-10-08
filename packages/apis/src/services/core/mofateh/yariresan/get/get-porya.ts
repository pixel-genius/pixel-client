import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getPoryaSchema as schema } from "./get-porya.schema";

export type GetPoryaProps = z.infer<typeof schema.request>;

export type GetPoryaPropsTransformed = z.infer<
  typeof schema.requestTransformed
>;
export type GetPoryaReturn = z.infer<typeof schema.response>;

export type GetPoryaReturnTransformed = z.infer<
  typeof schema.responseTransformed
>;

const getPoryaURL = () => path.join("/api/mofateh/yariresan");

export const getPorya = async (
  props: GetPoryaProps,
): Promise<ApiResponse<GetPoryaReturnTransformed>> => {
  const payloadParsed = schema.requestTransformed.parse(props);
  const URL = getPoryaURL();

  const response = await requestHandler(
    () => axios.get<GetPoryaReturn>(URL, { params: payloadParsed }),
    schema.response,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.responseTransformed.parse(response.data);

  return { ...response, data: dataParsed };
};
