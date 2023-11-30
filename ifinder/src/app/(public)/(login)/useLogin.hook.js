import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./schema";
import axios from "axios";
import { useState } from "react";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants";

export function useLogin() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginFormSchema) });
  const [errorLogin, setErrorLogin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post(ROUTE_HANDLERS.AUTH , {email: data.email, password: data.password});

      push(APP_ROUTES.CARDS)
    } catch (error) {
      setErrorLogin(error.response?.data);
    } finally {
      setIsLoading(false);
    }
  }

  return { register, handleSubmit, onSubmit, errors, errorLogin, isLoading };
}
