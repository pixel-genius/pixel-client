import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import path from "path";
import { postLoginSchema as schema } from "./post-login.schema";
import {
  PostLoginRequest,
  PostLoginResponseTransformed,
} from "./post-login.types";
import { guestApi } from "#instance/guest-api";

export const postLoginURL = () => path.join("/accounts/login/");

export const postLogin = async (
  props?: PostLoginRequest,
): Promise<ApiResponse<PostLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postLoginURL();

  const response = await requestHandler(
    () => guestApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);
  return { ...response, data: dataParsed };
};
