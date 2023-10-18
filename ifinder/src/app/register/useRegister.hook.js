import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";
import { ROUTE_HANDLERS } from "@/constants/routeHandlers";

export function useRegister() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    resolver: zodResolver(RegisterSchema),
  });
  const [errorRegister, setErrorRegister] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post(ROUTE_HANDLERS.REGISTER , {email: data.email, password: data.password});

    } catch (error) {
      setErrorRegister(error.response?.message);
    } finally {
      setIsLoading(false);
    }
  }


  return { register, handleSubmit, onSubmit, errors, errorRegister, isLoading };
}
