import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import {
  PostForgetRequest,
  PostForgetResponseTransformed,
} from "./post-forget.types";
import { postForget } from "./post-forget";
import "./post-forget.schema";

export type UsePostForgetProps = UseMutationProps<
  ApiResponse<PostForgetResponseTransformed>,
  ApiError,
  PostForgetRequest
>;

export const postForgetQueryKey = () => ["postForget"];

export const UsePostForget = (props?: UsePostForgetProps) => {
  const mutation = useMutation<
    ApiResponse<PostForgetResponseTransformed>,
    ApiError,
    PostForgetRequest
  >({
    mutationKey: postForgetQueryKey(),
    mutationFn: (data) => postForget(data),
    ...props,
  });

  return mutation;
};
