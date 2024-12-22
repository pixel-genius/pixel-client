import {
  DefinedInitialDataOptions,
  QueryKey,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type ApiResponse<T = any, D = any> = AxiosResponse<T, D>;

export type WithParams<P = unknown | undefined> = { params: P };

export type UseQueryProps<
  TQueryFnData = unknown,
  TVariables extends WithParams = WithParams,
  TError = ApiError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Partial<DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>> &
  TVariables;

export type UseMutationProps<
  TData = unknown,
  TError = ApiError,
  TVariables = void,
  TContext = unknown,
> = Partial<UseMutationOptions<TData, TError, TVariables, TContext>>;

export type ApiError = AxiosError<{
  message: string;
}>;
