import { coreApi } from "#instance/core-api";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postUploadfileSchema as schema } from "./post-uploadfile.schema";
import {
  PostUploadfileRequest,
  PostUploadfileResponseTransformed,
} from "./post-uploadfile.types";

export const postUploadfileURL = () => path.join("/base/upload/");

export const postUploadfile = async (
  props?: PostUploadfileRequest,
): Promise<ApiResponse<PostUploadfileResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postUploadfileURL();

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
