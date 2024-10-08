import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import {
  getPorya,
  GetPoryaProps,
  GetPoryaReturnTransformed,
} from "./get-porya";

export type UseGetPoryaProps = UseQueryProps<
  ApiResponse<GetPoryaReturnTransformed>,
  WithParams<GetPoryaProps>
>;

export const getPoryaQueryKey = () => ["getPorya"];

export const UseGetPorya = (props: UseGetPoryaProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetPoryaReturnTransformed>, ApiError>({
    queryKey: getPoryaQueryKey(),
    queryFn: () => getPorya(params),
    ...resProps,
  });

  return query;
};
