import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postFileUpload } from "./post-file-upload";
import {} from "./post-file-upload.schema";
import {
  PostFileUploadRequest,
  PostFileUploadResponseTransformed,
} from "./post-file-upload.types";

export type UsePostFileUploadProps = UseMutationProps<
  ApiResponse<PostFileUploadResponseTransformed>,
  ApiError,
  PostFileUploadRequest
>;

export const postFileUploadQueryKey = () => ["postFileUpload"];

export const UsePostFileUpload = (props?: UsePostFileUploadProps) => {
  const mutation = useMutation<
    ApiResponse<PostFileUploadResponseTransformed>,
    ApiError,
    PostFileUploadRequest
  >({
    mutationKey: postFileUploadQueryKey(),
    mutationFn: (data) => postFileUpload(data),
    ...props,
  });

  return mutation;
};
