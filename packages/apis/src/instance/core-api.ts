import axios from "axios";

export const coreApi = axios.create({
  baseURL: "http://37.152.182.32/", // You can set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

coreApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    // if (status === 401) {
    //   router.push("/login");
    // } else if (status === 403) {
    //   alert(
    //     "Access denied. You do not have permission to perform this action.",
    //   );
    //   router.push("/forbidden");
    // }

    return Promise.reject(error);
  },
);
