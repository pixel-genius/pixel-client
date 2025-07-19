import { coreApi } from "#instance/core-api";
import path from "path";

import { requestHandler } from "@repo/apis/utils/request-handler";
import { ApiResponse } from "@repo/apis/types/api.types";

import {
  GetProductVersionListRequest,
  GetProductVersionListResponse,
  GetProductVersionListResponseTransformed,
} from "./get-product-version-list.types";
import { getProductVersionListSchema as schema } from "./get-product-version-list.schema";

const getProductVersionListURL = () => path.join("/shop/product-version/");

export const getProductVersionList = async (
  props: GetProductVersionListRequest,
): Promise<ApiResponse<GetProductVersionListResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getProductVersionListURL();

  const response = await requestHandler(
    () =>
      coreApi.get<GetProductVersionListResponse>(URL, {
        params: payloadParsed,
      }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
