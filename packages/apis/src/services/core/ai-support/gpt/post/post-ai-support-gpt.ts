import { coreApi } from "#instance/core-api";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postAiSupportGptSchema as schema } from "./post-ai-support-gpt.schema";
import {
  PostAiSupportGptRequest,
  PostAiSupportGptResponseTransformed,
} from "./post-ai-support-gpt.types";

export const postAiSupportGptURL = () => path.join("/ai-support/gpt/");

export const postAiSupportGpt = async (
  props?: PostAiSupportGptRequest,
): Promise<ApiResponse<PostAiSupportGptResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postAiSupportGptURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
