import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import {
  postPorya,
  PostPoryaProps,
  PostPoryaReturnTransformed,
} from "./post-porya";

export type UsePostPoryaProps = UseMutationProps<
  ApiResponse<PostPoryaReturnTransformed>,
  ApiError,
  PostPoryaProps
>;

export const postPoryaQueryKey = () => ["postPorya"];

export const UsePostPorya = (props: UsePostPoryaProps) => {
  const mutation = useMutation<
    ApiResponse<PostPoryaReturnTransformed>,
    ApiError,
    PostPoryaProps
  >({
    mutationKey: postPoryaQueryKey(),
    mutationFn: (data) => postPorya(data),
    ...props,
  });

  return mutation;
};
