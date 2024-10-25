import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "./post-register";
import {} from "./post-register.schema";
import {
  PostRegisterRequest,
  PostRegisterResponseTransformed,
} from "./post-register.types";

export type UsePostRegisterProps = UseMutationProps<
  ApiResponse<PostRegisterResponseTransformed>,
  ApiError,
  PostRegisterRequest
>;

export const postRegisterQueryKey = () => ["postRegister"];

export const UsePostRegister = (props?: UsePostRegisterProps) => {
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
