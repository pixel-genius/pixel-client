import {
  GetFileFormatsRequest,
  GetFileFormatsResponse,
  GetFileFormatsResponseTransformed,
} from "./get-file-formats.types";
import { getFileFormatsSchema as schema } from "./get-file-formats.schema";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";
import { coreApi } from "#instance/core-api";
import path from "path";

const getFileFormatsURL = () => path.join("/shop/file-formats/");

export const getFileFormats = async (): Promise<
  ApiResponse<GetFileFormatsResponseTransformed>
> => {
  const URL = getFileFormatsURL();

  const response = await requestHandler(
    () => coreApi.get<GetFileFormatsResponse>(URL),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
