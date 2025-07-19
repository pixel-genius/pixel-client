import { coreApi } from "#instance/core-api";
import path from "path";

import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";

import {
  PostFileUploadRequest,
  PostFileUploadResponseTransformed,
} from "./post-file-upload.types";
import { postFileUploadSchema as schema } from "./post-file-upload.schema";

export const postFileUploadURL = () => path.join("/accounts/file-upload");

export const postFileUpload = async (
  props?: PostFileUploadRequest,
): Promise<ApiResponse<PostFileUploadResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postFileUploadURL();

  const response = await requestHandler(
    () =>
      coreApi.post(URL, payloadParsed, {
        headers: {
          "Content-Type": "multipart/form-data",
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
