import { useQuery } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";

import { getShopProductList } from "./get-shop-product-list";
import {
  GetShopProductListRequest,
  GetShopProductListResponseTransformed,
} from "./get-shop-product-list.types";

export type UseGetShopProductListProps = UseQueryProps<
  ApiResponse<GetShopProductListResponseTransformed>,
  WithParams<GetShopProductListRequest>
>;

export const getShopProductListQueryKey = () => ["getShopProductList"];

export const UseGetShopProductList = (props: UseGetShopProductListProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<
    ApiResponse<GetShopProductListResponseTransformed>,
    ApiError
  >({
    queryKey: getShopProductListQueryKey(),
    queryFn: () => getShopProductList(params),
    ...resProps,
  });

  return query;
};
