import { useMutation } from "@tanstack/react-query";

import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import { postVerifyOtp } from "./post-verify-otp";
import "./post-verify-otp.schema";
import type {
  PostVerifyOtpRequest,
  PostVerifyOtpResponseTransformed,
} from "./post-verify-otp.types";

export type UsePostVerifyOtpProps = UseMutationProps<
  ApiResponse<PostVerifyOtpResponseTransformed>,
  ApiError,
  PostVerifyOtpRequest
>;

export const postVerifyOtpQueryKey = () => ["postVerifyOtp"];

export const usePostVerifyOtp = (props?: UsePostVerifyOtpProps) => {
  const mutation = useMutation<
    ApiResponse<PostVerifyOtpResponseTransformed>,
    ApiError,
    PostVerifyOtpRequest
  >({
    mutationKey: postVerifyOtpQueryKey(),
    mutationFn: (data) => postVerifyOtp(data),
    ...props,
  });

  return mutation;
};
