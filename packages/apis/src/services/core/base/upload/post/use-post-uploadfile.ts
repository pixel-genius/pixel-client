import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postUploadfile } from "./post-uploadfile";
import {} from "./post-uploadfile.schema";
import {
  PostUploadfileRequest,
  PostUploadfileResponseTransformed,
} from "./post-uploadfile.types";

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
