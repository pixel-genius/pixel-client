import path from "path";
import { z } from "zod";
import axios from "axios";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { deletePoryaSchema as schema } from "./delete-porya.schema";

export type DeletePoryaProps = z.infer<typeof schema.request>;

export type DeletePoryaPropsTransformed = z.infer<
  typeof schema.requestTransformed
>;
export type DeletePoryaReturn = z.infer<typeof schema.response>;

export type DeletePoryaReturnTransformed = z.infer<
  typeof schema.responseTransformed
>;

export const deletePoryaURL = () => path.join("/api/mofateh/yariresan");

export const deletePorya = async (
  props: DeletePoryaProps,
): Promise<ApiResponse<DeletePoryaReturn>> => {
  const payloadParsed = schema.requestTransformed.parse(props);

  const URL = deletePoryaURL();

  const response = await requestHandler(
    () => axios.delete(URL, payloadParsed),
    schema.response,
  );

  const dataParsed = schema.responseTransformed.parse(response.data);

  return { ...response, data: dataParsed };
};
