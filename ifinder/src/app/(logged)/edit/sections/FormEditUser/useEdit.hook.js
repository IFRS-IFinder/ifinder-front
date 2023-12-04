import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditSchema } from "./schema";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";
import { useState } from "react";
import axios from "axios";

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
    resolver: zodResolver(EditSchema),
  });
  const [errorEdit, setErrorEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post(ROUTE_HANDLERS.EDIT, {
        email: data.email,
        age: data.age,
        sex: data.sex,
        description: data.description,
        hoobies: data.hoobies,
      });
    } catch (error) {
      setErrorEdit(error.response?.data);
    } finally {
      setIsLoading(false);
    }
  }

  return { register, handleSubmit, onSubmit, errors, errorEdit, isLoading };
}
