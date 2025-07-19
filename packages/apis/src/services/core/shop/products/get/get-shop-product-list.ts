import { coreApi } from "#instance/core-api";
import path from "path";

import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";

import {
  GetShopProductListRequest,
  GetShopProductListResponse,
  GetShopProductListResponseTransformed,
} from "./get-shop-product-list.types";
import { getShopProductListSchema as schema } from "./get-shop-product-list.schema";

const getShopProductListURL = () => path.join("/shop/products/");

export const getShopProductList = async (
  props: GetShopProductListRequest,
): Promise<ApiResponse<GetShopProductListResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getShopProductListURL();

  const response = await requestHandler(
    () =>
      coreApi.get<GetShopProductListResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: false,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
