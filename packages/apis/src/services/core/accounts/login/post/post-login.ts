import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import path from "path";
import { postLoginSchema as schema } from "./post-login.schema";
import {
  PostLoginRequest,
  PostLoginResponseTransformed,
} from "./post-login.types";
import { coreApi } from "./../../../../../instance/core-api";

export const postLoginURL = () => path.join("/accounts/login/");

export const postLogin = async (
  props?: PostLoginRequest,
): Promise<ApiResponse<PostLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postLoginURL();

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
