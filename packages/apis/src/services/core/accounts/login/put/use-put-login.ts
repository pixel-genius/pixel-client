import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putLogin } from "./put-login";
import {} from "./put-login.schema";
import {
  PutLoginRequest,
  PutLoginResponseTransformed,
} from "./put-login.types";

export type UsePutLoginProps = UseMutationProps<
  ApiResponse<PutLoginResponseTransformed>,
  ApiError,
  PutLoginRequest
>;

export const putLoginQueryKey = () => ["putLogin"];

export const UsePutLogin = (props?: UsePutLoginProps) => {
  const mutation = useMutation<
    ApiResponse<PutLoginResponseTransformed>,
    ApiError,
    PutLoginRequest
  >({
    mutationKey: putLoginQueryKey(),
    mutationFn: (data) => putLogin(data),
    ...props,
  });

  return mutation;
};
