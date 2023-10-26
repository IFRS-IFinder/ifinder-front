import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";
import { useState } from "react";

export function useEdit(user) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: user.email,
      age: user.age,
      sex: user.sex,
      description: user.description,
      hoobies: user.hoobies,
    },
    resolver: zodResolver(RegisterSchema),
  });
  const [errorRegister, setErrorRegister] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post(ROUTE_HANDLERS.EDIT_USER + user.id, {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      setErrorRegister(error.response?.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { register, handleSubmit, onSubmit, errors, errorRegister, isLoading };
}
