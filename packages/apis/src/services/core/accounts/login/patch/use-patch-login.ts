import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchLogin } from "./patch-login";
import {} from "./patch-login.schema";
import {
  PatchLoginRequest,
  PatchLoginResponseTransformed,
} from "./patch-login.types";

export type UsePatchLoginProps = UseMutationProps<
  ApiResponse<PatchLoginResponseTransformed>,
  ApiError,
  PatchLoginRequest
>;

export const patchLoginQueryKey = () => ["patchLogin"];

export const UsePatchLogin = (props?: UsePatchLoginProps) => {
  const mutation = useMutation<
    ApiResponse<PatchLoginResponseTransformed>,
    ApiError,
    PatchLoginRequest
  >({
    mutationKey: patchLoginQueryKey(),
    mutationFn: (data) => patchLogin(data),
    ...props,
  });

  return mutation;
};
