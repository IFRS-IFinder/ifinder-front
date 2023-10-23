import { API_ROUTES } from "@/constants/apiRoutes";
import axios from "axios";

export const cardService = {
  getHome: async (page, take) => {
    const response = await axios.get(API_ROUTES.CARD, {
      params: { page: page, take: take },
    });
    return response.data;
  },
  add: async(content) => {
    const response = await axios.post(API_ROUTES.CARD, {
      content: content
    });
    return response.data;
  }
};
