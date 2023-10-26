import { API_ROUTES } from "@/constants/apiRoutes";
import axios from "axios";

export const userService = {
  getById: async (id) => {
    const response = await axios.get(API_ROUTES.USER + id);
    return response.data;
  },
  edit: async (id, email, description, hoobies, sex, age) => {
    const response = await axios.get(
      API_ROUTES.USER + id + API_ROUTES.USER.EDIT,
      {
        email: email,
        description: description,
        hoobies: hoobies,
        sex: sex,
        age: age,
      }
    );
    return response.data;
  },
};
