import { coreApi } from "#instance/core-api";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postRequestAuthorSchema as schema } from "./post-request-author.schema";
import {
  PostRequestAuthorRequest,
  PostRequestAuthorResponseTransformed,
} from "./post-request-author.types";

export const postRequestAuthorURL = () => path.join("/api/api/request-author");

export const postRequestAuthor = async (
  props?: PostRequestAuthorRequest,
): Promise<ApiResponse<PostRequestAuthorResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postRequestAuthorURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
