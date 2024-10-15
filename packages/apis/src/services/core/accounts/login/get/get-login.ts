import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getLoginSchema as schema } from "./get-login.schema";
import {
  GetLoginRequest,
  GetLoginResponse,
  GetLoginResponseTransformed,
} from "./get-login.types";

const getLoginURL = () => path.join("/api/account/login");

export const getLogin = async (
  props: GetLoginRequest,
): Promise<ApiResponse<GetLoginResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getLoginURL();

  const response = await requestHandler(
    () => axios.get<GetLoginResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
