import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteLogin } from "./delete-login";
import {} from "./delete-login.schema";
import {
  DeleteLoginRequest,
  DeleteLoginResponseTransformed,
} from "./delete-login.types";

export type UseDeleteLoginProps = UseMutationProps<
  ApiResponse<DeleteLoginResponseTransformed>,
  ApiError,
  DeleteLoginRequest
>;

export const deleteLoginQueryKey = () => ["deleteLogin"];

export const UseDeleteLogin = (props?: UseDeleteLoginProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteLoginResponseTransformed>,
    ApiError,
    DeleteLoginRequest
  >({
    mutationKey: deleteLoginQueryKey(),
    mutationFn: (data) => deleteLogin(data),
    ...props,
  });

  return mutation;
};
