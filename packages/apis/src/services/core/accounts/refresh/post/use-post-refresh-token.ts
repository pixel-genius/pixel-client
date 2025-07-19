import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import { postRefreshToken } from "./post-refresh-token";
import "./post-refresh-token.schema";
import {
  PostRefreshTokenRequest,
  PostRefreshTokenResponseTransformed,
} from "./post-refresh-token.types";

export type UsePostRefreshTokenProps = UseMutationProps<
  ApiResponse<PostRefreshTokenResponseTransformed>,
  ApiError,
  PostRefreshTokenRequest
>;

export const postRefreshTokenQueryKey = () => ["postRefreshToken"];

export const UsePostRefreshToken = (props?: UsePostRefreshTokenProps) => {
  const mutation = useMutation<
    ApiResponse<PostRefreshTokenResponseTransformed>,
    ApiError,
    PostRefreshTokenRequest
  >({
    mutationKey: postRefreshTokenQueryKey(),
    mutationFn: (data) => postRefreshToken(data),
    ...props,
  });

  return mutation;
};
