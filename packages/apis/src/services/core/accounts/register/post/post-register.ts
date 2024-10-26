import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postRegisterSchema as schema } from "./post-register.schema";
import {
  PostRegisterRequest,
  PostRegisterResponseTransformed,
} from "./post-register.types";

export const postRegisterURL = () => path.join("/api/accounts/register");

export const postRegister = async (
  props?: PostRegisterRequest,
): Promise<ApiResponse<PostRegisterResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postRegisterURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
