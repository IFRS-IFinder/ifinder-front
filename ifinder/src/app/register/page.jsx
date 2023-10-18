import { useRegister } from "./useRegister.hook"

export default function Register(){
    const {register, errors, handleSubmit, onSubmit, errorRegister, isLoading} = useRegister()

    return(
        <div>
            <h1>Crie sua conta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errorRegister && <p>{errorRegister}</p>}
                {isLoading && <p>{isLoading}</p>}

                <input type="text" {...register("email")} placeholder="Email"/>
                {errors.email?.message && <p>{errors.email?.message}</p>}

                <input type="text" {...register("password")} placeholder="Senha"/>
                {errors.password?.message && <p>{errors.password?.message}</p>}

                <textarea cols="5" {...register("description")} placeholder="Descrição"/>
                {errors.description?.message && <p>{errors.description?.message}</p>}

                <button>Criar conta</button>
            </form>
        </div>
    )
}