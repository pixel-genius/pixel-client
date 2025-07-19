import { guestApi } from "#instance/guest-api";
import path from "path";

import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import { postForgetSchema as schema } from "./post-forget.schema";
import {
  PostForgetRequest,
  PostForgetResponseTransformed,
} from "./post-forget.types";

export const postForgetURL = () => path.join("/api/auth");

export const postForget = async (
  props?: PostForgetRequest,
): Promise<ApiResponse<PostForgetResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postForgetURL();

  const response = await requestHandler(
    () => guestApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
