import {
  PostProductsRequest,
  PostProductsResponseTransformed,
} from "./post-products.types";
import { postProductsSchema as schema } from "./post-products.schema";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";
import { coreApi } from "#instance/core-api";
import path from "path";

export const postProductsURL = () => path.join("/shop/products/");

export const postProducts = async (
  props?: PostProductsRequest,
): Promise<ApiResponse<PostProductsResponseTransformed>> => {
  console.log("props", props);
  const payloadParsed = schema.request.safeParse(props);
  if (!payloadParsed.success) {
    console.log("payloadParsed", payloadParsed.error);
    throw new Error("Invalid payload");
  }

  const URL = postProductsURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed.data),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
