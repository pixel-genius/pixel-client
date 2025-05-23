import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getProductVersions } from "./get-product-versions";
import {
  GetProductVersionsRequest,
  GetProductVersionsResponseTransformed,
} from "./get-product-versions.types";

export type UseGetProductVersionsProps = UseQueryProps<
  ApiResponse<GetProductVersionsResponseTransformed>,
  WithParams<GetProductVersionsRequest>
>;

export const getProductVersionsQueryKey = () => ["getProductVersions"];

export const UseGetProductVersions = (props: UseGetProductVersionsProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetProductVersionsResponseTransformed>, ApiError>({
  queryKey: getProductVersionsQueryKey(),
  queryFn: () => getProductVersions(params),
    ...resProps,
  });

  return query;
};
