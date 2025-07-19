import { useMutation } from "@tanstack/react-query";

import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import type {
  PostRegisterRequest,
  PostRegisterResponseTransformed,
} from "./post-register.types";
import { postRegister } from "./post-register";

export type UsePostRegisterProps = UseMutationProps<
  ApiResponse<PostRegisterResponseTransformed>,
  ApiError,
  PostRegisterRequest
>;

export const postRegisterQueryKey = () => ["postRegister"];

export const usePostRegister = (props?: UsePostRegisterProps) => {
  const mutation = useMutation<
    ApiResponse<PostRegisterResponseTransformed>,
    ApiError,
    PostRegisterRequest
  >({
    mutationKey: postRegisterQueryKey(),
    mutationFn: (data) => postRegister(data),
    ...props,
  });

  return mutation;
};
