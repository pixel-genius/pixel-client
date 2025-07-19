import { useQuery } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";

import { getProductVersionList } from "./get-product-version-list";
import {
  GetProductVersionListRequest,
  GetProductVersionListResponseTransformed,
} from "./get-product-version-list.types";

export type UseGetProductVersionListProps = UseQueryProps<
  ApiResponse<GetProductVersionListResponseTransformed>,
  WithParams<GetProductVersionListRequest>
>;

export const getProductVersionListQueryKey = () => ["getProductVersionList"];

export const UseGetProductVersionList = (
  props: UseGetProductVersionListProps,
) => {
  const { params, ...resProps } = props;

  const query = useQuery<
    ApiResponse<GetProductVersionListResponseTransformed>,
    ApiError
  >({
    queryKey: getProductVersionListQueryKey(),
    queryFn: () => getProductVersionList(params),
    ...resProps,
  });

  return query;
};
