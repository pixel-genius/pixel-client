import Cookie from "js-cookie";

type Tokens = { access: string; refresh: string };

const setAuthTokens = (token: Tokens) => {
  Cookie.set("access", token.access);
  Cookie.set("refresh", token.refresh);
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
