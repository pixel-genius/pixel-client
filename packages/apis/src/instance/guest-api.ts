import axios from "axios";

export const guestApi = axios.create({
  // TODO: change to process.env.NEXT_PUBLIC_BASE_URL
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://api.pixelgenius.ir",
  headers: {
    "Content-Type": "application/json",
  },
});
