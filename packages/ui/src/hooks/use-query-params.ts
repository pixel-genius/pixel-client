import { usePathname, useRouter, useSearchParams } from "next/dist/client/components/navigation";
import React from "react";




export const useQueryParams = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
  
    const createQueryString = React.useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
  
        return params.toString();
      },
      [searchParams],
    );

    const createQueryStringFromObject = React.useCallback(
      (object: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());

        for (const [key, value] of Object.entries(object)) {
          params.set(key, value);
        }

        return params.toString();
      },
      [searchParams],
    );
  
    const deleteQueryString = React.useCallback(
      (name: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(name);
  
        return params.toString();
      },
      [searchParams],
    );

    const setQuery = React.useCallback(
      (name: string, value: string) => router.push(pathname + "?" + createQueryString(name, value)),
      [router, pathname, createQueryString]
    );

    const deleteQuery = React.useCallback(
      (name: string) => router.push(pathname + "?" + deleteQueryString(name)),
      [router, pathname, deleteQueryString]
    );
  
    return {
      setQuery,
      deleteQuery,
      createQueryString,
      deleteQueryString,
      createQueryStringFromObject,
      searchParams,
      router,
      pathname,
    }
  }