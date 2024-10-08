import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import {
  putPorya,
  PutPoryaProps,
  PutPoryaReturnTransformed,
} from "./put-porya";

export type UsePutPoryaProps = UseMutationProps<
  ApiResponse<PutPoryaReturnTransformed>,
  ApiError,
  PutPoryaProps
>;

export const putPoryaQueryKey = () => ["putPorya"];

export const UsePutPorya = (props: UsePutPoryaProps) => {
  const mutation = useMutation<
    ApiResponse<PutPoryaReturnTransformed>,
    ApiError,
    PutPoryaProps
  >({
    mutationKey: putPoryaQueryKey(),
    mutationFn: (data) => putPorya(data),
    ...props,
  });

  return mutation;
};
