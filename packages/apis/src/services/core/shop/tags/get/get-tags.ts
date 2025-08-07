import {
  GetTagsRequest,
  GetTagsResponse,
  GetTagsResponseTransformed,
} from "./get-tags.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getTagsSchema as schema } from "./get-tags.schema";
import { ApiResponse } from "@repo/apis/types/api.types";
import { coreApi } from "#instance/core-api";
import path from "path";

const getTagsURL = () => path.join("/shop/tags/");

export const getTags = async (
  props: GetTagsRequest,
): Promise<ApiResponse<GetTagsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getTagsURL();

  const response = await requestHandler(
    () => coreApi.get<GetTagsResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
  );

  // safe parse data
  const dataParsed = schema.response.safeParse(response.data);

  let responseParsed = response;

  console.log("dataParsed", dataParsed);
  console.log("Error: ===> ", dataParsed.error);
  if (!dataParsed.success) {
    throw new Error(`Invalid response data ${dataParsed.error}`);
  }

  return { ...responseParsed, data: dataParsed.data };
};
