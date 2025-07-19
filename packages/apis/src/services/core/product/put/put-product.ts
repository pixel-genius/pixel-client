import { coreApi } from "#instance/core-api";
import path from "path";

import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";

import { putProductSchema as schema } from "./put-product.schema";
import {
  PutProductRequest,
  PutProductResponseTransformed,
} from "./put-product.types";

export const putProductURL = () => path.join("/api/product");

export const putProduct = async (
  props?: PutProductRequest,
): Promise<ApiResponse<PutProductResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putProductURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
