import { coreApi } from "#instance/core-api";
import path from "path";

import type { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import { postVerifyOtpSchema as schema } from "./post-verify-otp.schema";
import type {
  PostVerifyOtpRequest,
  PostVerifyOtpResponseTransformed,
} from "./post-verify-otp.types";

export const postVerifyOtpURL = () => path.join("accounts/users/verify_otp/");

export const postVerifyOtp = async (
  props?: PostVerifyOtpRequest,
): Promise<ApiResponse<PostVerifyOtpResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postVerifyOtpURL();
  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );
  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
