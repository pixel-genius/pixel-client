import {
  PostProductsRequest,
  PostProductsResponseTransformed,
} from "./post-products.types";
import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postProducts } from "./post-products";
import {} from "./post-products.schema";

export type UsePostProductsProps = UseMutationProps<
  ApiResponse<PostProductsResponseTransformed>,
  ApiError,
  PostProductsRequest
>;

export const postProductsQueryKey = () => ["postProducts"];

export const usePostProducts = (props?: UsePostProductsProps) => {
  const mutation = useMutation<
    ApiResponse<PostProductsResponseTransformed>,
    ApiError,
    PostProductsRequest
  >({
    mutationKey: postProductsQueryKey(),
    mutationFn: (data) => postProducts(data),
    ...props,
  });

  return mutation;
};
