import { API_ROUTES } from "@/constants/apiRoutes";
import axiosInstance from "./base/axiosInstance";

export const cardService = {
  getHome: async (page = 1, take = 10) => {
    const response = await axiosInstance.get(API_ROUTES.CARD, {
      params: { page: page, take: take },
    });
    return response.data.data;
  },
  getByUserId: async (idUser, page = 1, take = 20) => {
    const response = await axiosInstance.get(API_ROUTES.CARD + idUser, {
       params: { page: page, take: take }
    });
    return response.data.data;
  },
  add: async (text) => {
    const response = await axiosInstance.post(API_ROUTES.CARD, {
      text: text,
    });
    return response.data;
  },
};
