import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import axios from "axios";
import path from "path";
import { z } from "zod";
import { putLoginSchema as schema } from "./put-login.schema";
import {
  PutLoginRequest,
  PutLoginResponseTransformed,
} from "./put-login.types";

export const putLoginURL = () => path.join("/api/accounts/login");

export const putLogin = async (
  props?: PutLoginRequest,
): Promise<ApiResponse<PutLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putLoginURL();

  const response = await requestHandler(
    () => axios.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
