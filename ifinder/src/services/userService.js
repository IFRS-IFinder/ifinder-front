import { API_ROUTES } from "@/constants/apiRoutes";
import axiosInstance from "./base/axiosInstance";

export const userService = {
  getSimpleById: async (id) => {
    const response = await axiosInstance.get(API_ROUTES.USER + id);
    return response.data.data;
  },
  getCompleteById: async (id) => {
    const response = await axiosInstance.get(API_ROUTES.USER + id + "/complete");
    return response.data.data;
  },
  edit: async(email, description, age, sex, hobbies) => {
    const response = await axiosInstance.patch(API_ROUTES.USER, {
      email: email,
      description: description,
      age: age,
      sex: sex,
      hobbies: hobbies,
    })
    return response.data;
  }
};
 