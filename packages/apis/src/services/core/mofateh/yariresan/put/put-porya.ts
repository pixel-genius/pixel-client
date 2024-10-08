import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { putPoryaSchema as schema } from "./put-porya.schema";

export type PutPoryaProps = z.infer<typeof schema.request>;

export type PutPoryaPropsTransformed = z.infer<
  typeof schema.requestTransformed
>;
export type PutPoryaReturn = z.infer<typeof schema.response>;

export type PutPoryaReturnTransformed = z.infer<
  typeof schema.responseTransformed
>;

export const putPoryaURL = () => path.join("/api/mofateh/yariresan");

export const putPorya = async (
  props: PutPoryaProps,
): Promise<ApiResponse<PutPoryaReturn>> => {
  const payloadParsed = schema.requestTransformed.parse(props);

  const URL = putPoryaURL();

  const response = await requestHandler(
    () => axios.put(URL, payloadParsed),
    schema.response,
  );

  const dataParsed = schema.responseTransformed.parse(response.data);

  return { ...response, data: dataParsed };
};
