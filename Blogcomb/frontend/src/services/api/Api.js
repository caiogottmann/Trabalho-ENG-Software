import axios from "axios";
import { GetCookie } from "@/utils/CookieUtil";

const url = "http://localhost:5000";

export default () => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: GetCookie("token")
        ? `Bearer ${GetCookie("token")}`
        : undefined,
    },
  });
};
