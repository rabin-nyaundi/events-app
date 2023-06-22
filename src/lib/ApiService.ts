import axios from "axios";
import { API } from "@src/types/types";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function get({ path }: API) {
  const response = await instance.get(path);
  return response.data;
}
