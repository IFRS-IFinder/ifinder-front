import { API_ROUTES } from "@/constants/apiRoutes";
import axios from "axios";

export const userService = {
  getById: async (id) => {
    const response = await axios.get(API_ROUTES.USER + id);
    return response.data;
  },
};
