import { API_ROUTES } from "@/constants/apiRoutes";
import axios from "axios";
import axiosInstance from "./base/axiosInstance";

export const cardService = {
  getHome: async (page = 1, take = 10) => {
    const response = await axiosInstance.get(API_ROUTES.CARD, {
      params: { page: page, take: take },
    });
    return response.data;
  },
  add: async (content) => {
    const response = await axiosInstance.post(API_ROUTES.CARD, {
      content: content,
    });
    return response.data;
  },
};
