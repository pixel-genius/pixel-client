import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postRegisterCompleteSchema as schema } from "./post-register-complete.schema";
import {
  PostRegisterCompleteRequest,
  PostRegisterCompleteResponseTransformed,
} from "./post-register-complete.types";

export const postRegisterCompleteURL = () => path.join("/accounts/register/complete/");

export const postRegisterComplete = async (
  props?: PostRegisterCompleteRequest,
): Promise<ApiResponse<PostRegisterCompleteResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postRegisterCompleteURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
    {
      isMock: true,
    }
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
