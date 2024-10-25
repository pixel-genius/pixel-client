import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "./post-login";
import {} from "./post-login.schema";
import {
  PostLoginRequest,
  PostLoginResponseTransformed,
} from "./post-login.types";

export type UsePostLoginProps = UseMutationProps<
  ApiResponse<PostLoginResponseTransformed>,
  ApiError,
  PostLoginRequest
>;

export const postLoginQueryKey = () => ["postLogin"];

export const UsePostLogin = (props?: UsePostLoginProps) => {
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
