import { coreApi } from "#instance/core-api";
import path from "path";

import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";

import {
  PostRefreshTokenRequest,
  PostRefreshTokenResponseTransformed,
} from "./post-refresh-token.types";
import { postRefreshTokenSchema as schema } from "./post-refresh-token.schema";

export const postRefreshTokenURL = () => path.join("/accounts/refresh");

export const postRefreshToken = async (
  props?: PostRefreshTokenRequest,
): Promise<ApiResponse<PostRefreshTokenResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postRefreshTokenURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
