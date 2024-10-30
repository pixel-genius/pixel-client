import Cookie from "js-cookie";

type Tokens = { access: string; refresh: string };

const setAuthTokens = (token: Tokens) => {
  Cookie.set("accessToken", token.access);
  Cookie.set("refreshToken", token.refresh);
};

const getAuthTokens = () => {
  const access = Cookie.get("accessToken");
  const refresh = Cookie.get("refreshToken");
  return {
    access,
    refresh,
  };
};

export { setAuthTokens, getAuthTokens };
