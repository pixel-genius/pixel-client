import { coreApi } from "#instance/core-api";
import path from "path";

import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

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
    () =>
      coreApi.post(URL, payloadParsed, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM2NTAzMzk0LCJpYXQiOjE3MzU4OTg1OTQsImp0aSI6ImY4NmYwYzc5NjNhZTQwYTlhMGMzNzBiYzIyOTAyMmQ1IiwidXNlcl9pZCI6MX0.8c5Nn3ZtgQGHNJjEy2Ywvl9CWWf8BJLFK-4ab4wavCo",
        },
      }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
