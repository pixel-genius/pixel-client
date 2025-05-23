import { coreApi } from "#instance/core-api"; 
import path from "path";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getProductVersionsSchema as schema } from "./get-product-versions.schema";
import {
  GetProductVersionsRequest,
  GetProductVersionsResponse,
  GetProductVersionsResponseTransformed,
} from "./get-product-versions.types";

const getProductVersionsURL = () => path.join("/shop/product-version/flat/");

export const getProductVersions = async (
  props: GetProductVersionsRequest,
): Promise<ApiResponse<GetProductVersionsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getProductVersionsURL();

  const response = await requestHandler(
    () => coreApi.get<GetProductVersionsResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );
  

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
