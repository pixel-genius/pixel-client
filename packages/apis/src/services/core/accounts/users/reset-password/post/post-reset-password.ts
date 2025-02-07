import { coreApi } from "#instance/core-api"; 
import type { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postResetPasswordSchema as schema } from "./post-reset-password.schema";
import type {
  PostResetPasswordRequest,
  PostResetPasswordResponseTransformed,
} from "./post-reset-password.types";

export const postResetPasswordURL = () => path.join("accounts/users/reset-password/");

export const postResetPassword = async (
  props?: PostResetPasswordRequest,
): Promise<ApiResponse<PostResetPasswordResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postResetPasswordURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
