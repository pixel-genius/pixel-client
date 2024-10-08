import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import {
  patchPorya,
  PatchPoryaProps,
  PatchPoryaReturnTransformed,
} from "./patch-porya";

export type UsePatchPoryaProps = UseMutationProps<
  ApiResponse<PatchPoryaReturnTransformed>,
  ApiError,
  PatchPoryaProps
>;

export const patchPoryaQueryKey = () => ["patchPorya"];

export const UsePatchPorya = (props: UsePatchPoryaProps) => {
  const mutation = useMutation<
    ApiResponse<PatchPoryaReturnTransformed>,
    ApiError,
    PatchPoryaProps
  >({
    mutationKey: patchPoryaQueryKey(),
    mutationFn: (data) => patchPorya(data),
    ...props,
  });

  return mutation;
};
