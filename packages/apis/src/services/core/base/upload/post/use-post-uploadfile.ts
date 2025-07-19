import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import {
  PostUploadfileRequest,
  PostUploadfileResponseTransformed,
} from "./post-uploadfile.types";
import { postUploadfile } from "./post-uploadfile";
import "./post-uploadfile.schema";

export type UsePostUploadfileProps = UseMutationProps<
  ApiResponse<PostUploadfileResponseTransformed>,
  ApiError,
  PostUploadfileRequest
>;

export const postUploadfileQueryKey = () => ["postUploadfile"];

export const UsePostUploadfile = (props?: UsePostUploadfileProps) => {
  const mutation = useMutation<
    ApiResponse<PostUploadfileResponseTransformed>,
    ApiError,
    PostUploadfileRequest
  >({
    mutationKey: postUploadfileQueryKey(),
    mutationFn: (data) => postUploadfile(data),
    ...props,
  });

  return mutation;
};
