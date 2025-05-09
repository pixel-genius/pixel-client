import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postAiSupportGpt } from "./post-ai-support-gpt";
import {} from "./post-ai-support-gpt.schema";
import {
  PostAiSupportGptRequest,
  PostAiSupportGptResponseTransformed,
} from "./post-ai-support-gpt.types";

export type UsePostAiSupportGptProps = UseMutationProps<
  ApiResponse<PostAiSupportGptResponseTransformed>,
  ApiError,
  PostAiSupportGptRequest
>;

export const postAiSupportGptQueryKey = () => ["postAiSupportGpt"];

export const usePostAiSupportGpt = (props?: UsePostAiSupportGptProps) => {
  const mutation = useMutation<
    ApiResponse<PostAiSupportGptResponseTransformed>,
    ApiError,
    PostAiSupportGptRequest
  >({
    mutationKey: postAiSupportGptQueryKey(),
    mutationFn: (data) => postAiSupportGpt(data),
    ...props,
  });

  return mutation;
};
