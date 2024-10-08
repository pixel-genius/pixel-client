import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import {
  deletePorya,
  DeletePoryaProps,
  DeletePoryaReturnTransformed,
} from "./delete-porya";

export type UseDeletePoryaProps = UseMutationProps<
  ApiResponse<DeletePoryaReturnTransformed>,
  ApiError,
  DeletePoryaProps
>;

export const deletePoryaQueryKey = () => ["deletePorya"];

export const UseDeletePorya = (props: UseDeletePoryaProps) => {
  const mutation = useMutation<
    ApiResponse<DeletePoryaReturnTransformed>,
    ApiError,
    DeletePoryaProps
  >({
    mutationKey: deletePoryaQueryKey(),
    mutationFn: (data) => deletePorya(data),
    ...props,
  });

  return mutation;
};
