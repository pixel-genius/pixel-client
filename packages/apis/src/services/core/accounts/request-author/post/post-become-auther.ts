import { coreApi } from "#instance/core-api";
import path from "path";

import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import { postBecomeAutherSchema as schema } from "./post-become-auther.schema";
import {
  PostBecomeAutherRequest,
  PostBecomeAutherResponseTransformed,
} from "./post-become-auther.types";

export const postBecomeAutherURL = () =>
  path.join("/api//accounts/request-author/");

export const postBecomeAuther = async (
  props?: PostBecomeAutherRequest,
): Promise<ApiResponse<PostBecomeAutherResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postBecomeAutherURL();

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
