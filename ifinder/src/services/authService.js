import { API_ROUTES } from "@/constants/apiRoutes"
import axiosInstance from "./base/axiosInstance"
import axios from "axios"


export const authService = {
    auth: async (email, password) => {
        const response = await axios.post("http://localhost:44390/api/auth", {
            email: email,
            password: password
        })

        return response.data
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