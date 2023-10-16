import { API_ROUTES } from "@/constants/apiRoutes"
import axiosInstance from "./base/axiosInstance"


export const authService = {
    auth: async (email, password) => {
        const response = await axiosInstance.post(API_ROUTES.AUTH, {
            email: email,
            password: password
        })
        return response.data
    }
}