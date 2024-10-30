import { coreApi } from "#instance/core-api";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postForgetPasswordSchema as schema } from "./post-forget-password.schema";
import {
  PostForgetPasswordRequest,
  PostForgetPasswordResponseTransformed,
} from "./post-forget-password.types";

export const postForgetPasswordURL = () => path.join("/api/forgot-password");

export const postForgetPassword = async (
  props?: PostForgetPasswordRequest,
): Promise<ApiResponse<PostForgetPasswordResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postForgetPasswordURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
