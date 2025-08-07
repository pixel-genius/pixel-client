import {
  GetFileFormatsRequest,
  GetFileFormatsResponseTransformed,
} from "./get-file-formats.types";
import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { getFileFormats } from "./get-file-formats";
import { useQuery } from "@tanstack/react-query";

export type UseGetFileFormatsProps = UseQueryProps<
  ApiResponse<GetFileFormatsResponseTransformed>,
  WithParams<GetFileFormatsRequest>
>;

export const getFileFormatsQueryKey = () => ["getFileFormats"];

export const UseGetFileFormats = (props?: UseGetFileFormatsProps) => {
  const { ...resProps } = props || {};

  const query = useQuery<
    ApiResponse<GetFileFormatsResponseTransformed>,
    ApiError
  >({
    queryKey: getFileFormatsQueryKey(),
    queryFn: () => getFileFormats(),
    ...resProps,
  });

  return query;
};
