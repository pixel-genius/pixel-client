import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import axios from "axios";
import path from "path";
import { z } from "zod";
import { patchLoginSchema as schema } from "./patch-login.schema";
import {
  PatchLoginRequest,
  PatchLoginResponseTransformed,
} from "./patch-login.types";

export const patchLoginURL = () => path.join("/api/accounts/login");

export const patchLogin = async (
  props?: PatchLoginRequest,
): Promise<ApiResponse<PatchLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchLoginURL();

  const response = await requestHandler(
    () => axios.patch(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
