import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postForgetPassword } from "./post-forget-password";
import {} from "./post-forget-password.schema";
import {
  PostForgetPasswordRequest,
  PostForgetPasswordResponseTransformed,
} from "./post-forget-password.types";

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
    Omit<PostForgetPasswordRequest, "confirmPassword">
  >({
    mutationKey: postForgetPasswordQueryKey(),
    mutationFn: (data) => postForgetPassword(data),
    ...props,
  });

  return mutation;
};
