import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import {
  PutProductRequest,
  PutProductResponseTransformed,
} from "./put-product.types";
import { putProduct } from "./put-product";
import "./put-product.schema";

export type UsePutProductProps = UseMutationProps<
  ApiResponse<PutProductResponseTransformed>,
  ApiError,
  PutProductRequest
>;

export const putProductQueryKey = () => ["putProduct"];

export const UsePutProduct = (props?: UsePutProductProps) => {
  const mutation = useMutation<
    ApiResponse<PutProductResponseTransformed>,
    ApiError,
    PutProductRequest
  >({
    mutationKey: putProductQueryKey(),
    mutationFn: (data) => putProduct(data),
    ...props,
  });

  return mutation;
};
