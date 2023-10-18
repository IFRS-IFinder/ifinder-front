import { InputWrapper } from "@/components";
import { useRegister } from "./useRegister.hook";

export default function Register() {
  const { register, errors, handleSubmit, onSubmit, errorRegister, isLoading } =
    useRegister();

  return (
    <div>
      <h1>Crie sua conta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorRegister && <p>{errorRegister}</p>}
        {isLoading && <p>{isLoading}</p>}

        <InputWrapper text="email" error={errors.email?.message}>
          <input type="email" {...register("email")} />
        </InputWrapper>
        
        <InputWrapper text="password" error={errors.password?.message}>
          <input type="password" {...register("password")} />
        </InputWrapper>

        <InputWrapper text="sex" error={errors.sex?.message}>
          <input type="text" {...register("sex")} />
        </InputWrapper>

        <InputWrapper text="age" error={errors.age?.message}>
          <input type="text" {...register("age")} />
        </InputWrapper>

        <InputWrapper text="hoobies" error={errors.hoobies?.message}>
          <input type="text" {...register("hoobies")} />
        </InputWrapper>

        <InputWrapper text="description" error={errors.description?.message}>
          <textarea
            cols="5"
            {...register("description")}
            placeholder="Descrição"
          />
        </InputWrapper>

        <button>Criar conta</button>
      </form>
    </div>
  );
}
