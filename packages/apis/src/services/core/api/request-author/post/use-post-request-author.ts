import { useMutation } from "@tanstack/react-query";

import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";

import {
  PostRequestAuthorRequest,
  PostRequestAuthorResponseTransformed,
} from "./post-request-author.types";
import { postRequestAuthor } from "./post-request-author";
import "./post-request-author.schema";

export type UsePostRequestAuthorProps = UseMutationProps<
  ApiResponse<PostRequestAuthorResponseTransformed>,
  ApiError,
  PostRequestAuthorRequest
>;

export const postRequestAuthorQueryKey = () => ["postRequestAuthor"];

export const UsePostRequestAuthor = (props?: UsePostRequestAuthorProps) => {
  const mutation = useMutation<
    ApiResponse<PostRequestAuthorResponseTransformed>,
    ApiError,
    PostRequestAuthorRequest
  >({
    mutationKey: postRequestAuthorQueryKey(),
    mutationFn: (data) => postRequestAuthor(data),
    ...props,
  });

  return mutation;
};
