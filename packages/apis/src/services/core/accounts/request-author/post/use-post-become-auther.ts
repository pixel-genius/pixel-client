import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import { postBecomeAuther } from "./post-become-auther";
import "./post-become-auther.schema";
import {
  PostBecomeAutherRequest,
  PostBecomeAutherResponseTransformed,
} from "./post-become-auther.types";

export type UsePostBecomeAutherProps = UseMutationProps<
  ApiResponse<PostBecomeAutherResponseTransformed>,
  ApiError,
  PostBecomeAutherRequest
>;

export const postBecomeAutherQueryKey = () => ["postBecomeAuther"];

export const usePostBecomeAuther = (props?: UsePostBecomeAutherProps) => {
  const mutation = useMutation<
    ApiResponse<PostBecomeAutherResponseTransformed>,
    ApiError,
    PostBecomeAutherRequest
  >({
    mutationKey: postBecomeAutherQueryKey(),
    mutationFn: (data) => postBecomeAuther(data),
    ...props,
  });

  return mutation;
};
