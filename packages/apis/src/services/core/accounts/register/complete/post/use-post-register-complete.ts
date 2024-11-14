import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postRegisterComplete } from "./post-register-complete";
import {} from "./post-register-complete.schema";
import {
  PostRegisterCompleteRequest,
  PostRegisterCompleteResponseTransformed,
} from "./post-register-complete.types";

export type UsePostRegisterCompleteProps = UseMutationProps<
  ApiResponse<PostRegisterCompleteResponseTransformed>,
  ApiError,
  PostRegisterCompleteRequest
>;

export const postRegisterCompleteQueryKey = () => ["postRegisterComplete"];

export const UsePostRegisterComplete = (props?: UsePostRegisterCompleteProps) => {
  const mutation = useMutation<
    ApiResponse<PostRegisterCompleteResponseTransformed>,
    ApiError,
    PostRegisterCompleteRequest
  >({
    mutationKey: postRegisterCompleteQueryKey(),
    mutationFn: (data) => postRegisterComplete(data),
    ...props,
  });

  return mutation;
};
