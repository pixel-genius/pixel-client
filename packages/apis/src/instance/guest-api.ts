import axios from "axios";

export const guestApi = axios.create({
  baseURL: "https://api.pixelgenius.ir", // You can set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});
