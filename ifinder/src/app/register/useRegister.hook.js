import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";

export function useRegister() {
  const {
    formState: { erros },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    resolver: zodResolver(RegisterSchema),
  });
  const [errorRegister, setErrorRegister] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data) {
    /*
        try{
            setIsLoading(true)
            const dataUser = authService.auth(data.email, data.password)

            //revalidatePath
            //redirect

        } catch(error){
            setErrorLogin(error.response?.message)
        } finally{
            setIsLoading(false)
        }
        */
  }

  return { register, handleSubmit, onSubmit, errors, errorRegister, isLoading };
}
