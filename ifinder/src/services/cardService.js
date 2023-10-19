import { API_ROUTES } from "@/constants/apiRoutes";
import axios from "axios";

export const cardService = {
  getHome: async (page, take) => {
    const response = await axios.get(API_ROUTES.CARD, {
      params: { page: page, take: take },
    });
    return response.data;
  },
};
