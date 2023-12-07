import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { APP_ROUTES } from "@/constants";

export function useRegister() {
  const {push} = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(RegisterSchema),
  });
  const [errorRegister, setErrorRegister] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post(ROUTE_HANDLERS.REGISTER, data);

      setErrorRegister(null);
      push(APP_ROUTES.CARDS);
    } catch (error) {
      setErrorRegister(error.response?.message);
    } finally {
      setIsLoading(false);
    }
  }


  return { register, handleSubmit, onSubmit, errors, errorRegister, isLoading };
}
