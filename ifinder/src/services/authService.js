import { API_ROUTES } from "@/constants/apiRoutes"
import axiosInstance from "./base/axiosInstance"


export const authService = {
    auth: async (email, password) => {
        const response = await axiosInstance.post(API_ROUTES.AUTH, {
            email: email,
            password: password
        })

        return response.data.data
    },
    register: async (email, password, description, age, sex, hobbies) => {
        const response = await axiosInstance.post(API_ROUTES.AUTH + API_ROUTES.REGISTER, {
            email: email,
            password: password,
            description: description,
            age: age,
            sex: sex,
            hobbies: hobbies
        })
        return response.data;
    },
}