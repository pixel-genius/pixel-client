import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { patchPoryaSchema as schema } from "./patch-porya.schema";

export type PatchPoryaProps = z.infer<typeof schema.request>;

export type PatchPoryaPropsTransformed = z.infer<
  typeof schema.requestTransformed
>;
export type PatchPoryaReturn = z.infer<typeof schema.response>;

export type PatchPoryaReturnTransformed = z.infer<
  typeof schema.responseTransformed
>;

export const patchPoryaURL = () => path.join("/api/mofateh/yariresan");

export const patchPorya = async (
  props: PatchPoryaProps,
): Promise<ApiResponse<PatchPoryaReturn>> => {
  const payloadParsed = schema.requestTransformed.parse(props);

  const URL = patchPoryaURL();

  const response = await requestHandler(
    () => axios.patch(URL, payloadParsed),
    schema.response,
  );

  const dataParsed = schema.responseTransformed.parse(response.data);

  return { ...response, data: dataParsed };
};
