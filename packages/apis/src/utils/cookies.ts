import { COOKIES } from "@repo/ui/constant/cookie";
import Cookie from "js-cookie";

type Tokens = { access: string; refresh: string };

const setAuthTokens = (token: Tokens) => {
  Cookie.set(COOKIES.ACCESS_TOKEN, token.access);
  Cookie.set(COOKIES.REFRESH_TOKEN, token.refresh);
};

const getAuthTokens = () => {
  const access = Cookie.get("access");
  const refresh = Cookie.get("refresh");
  return {
    access,
    refresh,
  };
};

export { setAuthTokens, getAuthTokens };
