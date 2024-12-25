import axios from "axios";

export const guestApi = axios.create({
  baseURL: "http://37.152.182.32/", // You can set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});
