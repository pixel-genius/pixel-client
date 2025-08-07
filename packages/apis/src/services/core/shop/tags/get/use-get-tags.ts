import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { GetTagsRequest, GetTagsResponseTransformed } from "./get-tags.types";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "./get-tags";

export type UseGetTagsProps = UseQueryProps<
  ApiResponse<GetTagsResponseTransformed>,
  WithParams<GetTagsRequest>
>;

export const getTagsQueryKey = () => ["getTags"];

export const useGetTags = (props?: UseGetTagsProps) => {
  const { params, ...resProps } = props ?? {};

  const query = useQuery<ApiResponse<GetTagsResponseTransformed>, ApiError>({
    queryKey: getTagsQueryKey(),
    queryFn: () => getTags(params),
    ...resProps,
  });

  return query;
};
