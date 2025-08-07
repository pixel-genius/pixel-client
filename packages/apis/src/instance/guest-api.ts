import axios from "axios";

export const guestApi = axios.create({
  // TODO: change to process.env.NEXT_PUBLIC_BASE_URL
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});
