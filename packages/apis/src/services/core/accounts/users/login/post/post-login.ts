import { guestApi } from "#instance/guest-api";
import path from "path";

import { requestHandler } from "@repo/apis/utils/request-handler";
import type { ApiResponse } from "@repo/apis/types/api.types";

import type {
  PostLoginRequest,
  PostLoginResponseTransformed,
} from "./post-login.types";
import { postLoginSchema as schema } from "./post-login.schema";

export const postLoginURL = () => path.join("accounts/users/login/");

export const postLogin = async (
  props?: PostLoginRequest,
): Promise<ApiResponse<PostLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postLoginURL();

  const response = await requestHandler(
    () => guestApi.post(URL, payloadParsed),
    schema.response._def.schema,
    {
      isMock: false,
    },
  );

  const dataParsed = schema.response.parse(response.data);
  return { ...response, data: dataParsed };
};
