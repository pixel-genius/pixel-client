import { useMutation } from "@tanstack/react-query";

import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import type {
  PostForgetPasswordRequest,
  PostForgetPasswordResponseTransformed,
} from "./post-forget-password.types";
import { postForgetPassword } from "./post-forget-password";
import "./post-forget-password.schema";

export type UsePostForgetPasswordProps = UseMutationProps<
  ApiResponse<PostForgetPasswordResponseTransformed>,
  ApiError,
  PostForgetPasswordRequest
>;

export const postForgetPasswordQueryKey = () => ["postForgetPassword"];

export const UsePostForgetPassword = (props?: UsePostForgetPasswordProps) => {
  const mutation = useMutation<
    ApiResponse<PostForgetPasswordResponseTransformed>,
    ApiError,
    PostForgetPasswordRequest
  >({
    mutationKey: postForgetPasswordQueryKey(),
    mutationFn: (data) => postForgetPassword(data),
    ...props,
  });

  return mutation;
};
