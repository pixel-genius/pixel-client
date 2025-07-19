import { useMutation } from "@tanstack/react-query";

import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import type {
  PostLoginRequest,
  PostLoginResponseTransformed,
} from "./post-login.types";
import { postLogin } from "./post-login";

export type UsePostLoginProps = UseMutationProps<
  ApiResponse<PostLoginResponseTransformed>,
  ApiError,
  PostLoginRequest
>;

export const postLoginQueryKey = () => ["postLogin"];

export const usePostLogin = (props?: UsePostLoginProps) => {
  const mutation = useMutation<
    ApiResponse<PostLoginResponseTransformed>,
    ApiError,
    PostLoginRequest
  >({
    mutationKey: postLoginQueryKey(),
    mutationFn: (data) => postLogin(data),
    ...props,
  });

  return mutation;
};
