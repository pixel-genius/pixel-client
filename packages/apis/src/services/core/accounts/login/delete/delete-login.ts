import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import axios from "axios";
import path from "path";
import { z } from "zod";
import { deleteLoginSchema as schema } from "./delete-login.schema";
import {
  DeleteLoginRequest,
  DeleteLoginResponseTransformed,
} from "./delete-login.types";

export const deleteLoginURL = () => path.join("/api/accounts/login");

export const deleteLogin = async (
  props?: DeleteLoginRequest,
): Promise<ApiResponse<DeleteLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteLoginURL();

  const response = await requestHandler(
    () => axios.delete(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
