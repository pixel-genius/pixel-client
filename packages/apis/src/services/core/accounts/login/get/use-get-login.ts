import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getLogin } from "./get-login";
import {
  GetLoginRequest,
  GetLoginResponseTransformed,
} from "./get-login.types";

export type UseGetLoginProps = UseQueryProps<
  ApiResponse<GetLoginResponseTransformed>,
  WithParams<GetLoginRequest>
>;

export const getLoginQueryKey = () => ["getLogin"];

export const UseGetLogin = (props: UseGetLoginProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetLoginResponseTransformed>, ApiError>({
  queryKey: getLoginQueryKey(),
  queryFn: () => getLogin(params),
    ...resProps,
  });

  return query;
};
