import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postResetPassword } from "./post-reset-password";
import {} from "./post-reset-password.schema";
import type {
  PostResetPasswordRequest,
  PostResetPasswordResponseTransformed,
} from "./post-reset-password.types";

export type UsePostResetPasswordProps = UseMutationProps<
  ApiResponse<PostResetPasswordResponseTransformed>,
  ApiError,
  PostResetPasswordRequest
>;

export const postResetPasswordQueryKey = () => ["postResetPassword"];

export const usePostResetPassword = (props?: UsePostResetPasswordProps) => {
  const mutation = useMutation<
    ApiResponse<PostResetPasswordResponseTransformed>,
    ApiError,
    PostResetPasswordRequest
  >({
    mutationKey: postResetPasswordQueryKey(),
    mutationFn: (data) => postResetPassword(data),
    ...props,
  });

  return mutation;
};
