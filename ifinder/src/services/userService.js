import { API_ROUTES } from "@/constants/apiRoutes";
import axiosInstance from "./base/axiosInstance";

export const userService = {
  getById: async (id) => {
    const response = await axiosInstance.get(API_ROUTES.USER + id);
    return response.data;
  },
  edit: async(email, description, age, sex, hobbies) => {
    const response = await axiosInstance.patch(API_ROUTES.USER + API_ROUTES.EDIT, {
      email: email,
      description: description,
      age: age,
      sex: sex,
      hobbies: hobbies,
    })
    return response.data;
  }
};
