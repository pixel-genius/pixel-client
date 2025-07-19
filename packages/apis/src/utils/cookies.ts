import Cookie from "js-cookie";

import { COOKIES } from "./../constant/cookie";

type Tokens = { access: string; refresh: string };

const setAuthTokens = (token: Tokens) => {
  Cookie.set(COOKIES.ACCESS_TOKEN, token.access);
  Cookie.set(COOKIES.REFRESH_TOKEN, token.refresh);
};

const getAuthTokens = () => {
  const access = Cookie.get(COOKIES.ACCESS_TOKEN);
  const refresh = Cookie.get(COOKIES.REFRESH_TOKEN);
  return {
    access,
    refresh,
  };
};

export { setAuthTokens, getAuthTokens };
