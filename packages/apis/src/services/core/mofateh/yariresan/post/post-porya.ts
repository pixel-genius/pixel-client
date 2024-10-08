import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { postPoryaSchema as schema } from "./post-porya.schema";

export type PostPoryaProps = z.infer<typeof schema.request>;

export type PostPoryaPropsTransformed = z.infer<
  typeof schema.requestTransformed
>;
export type PostPoryaReturn = z.infer<typeof schema.response>;

export type PostPoryaReturnTransformed = z.infer<
  typeof schema.responseTransformed
>;

export const postPoryaURL = () => path.join("/api/mofateh/yariresan");

export const postPorya = async (
  props: PostPoryaProps,
): Promise<ApiResponse<PostPoryaReturn>> => {
  const payloadParsed = schema.requestTransformed.parse(props);

  const URL = postPoryaURL();

  const response = await requestHandler(
    () => axios.post(URL, payloadParsed),
    schema.response,
  );

  const dataParsed = schema.responseTransformed.parse(response.data);

  return { ...response, data: dataParsed };
};
