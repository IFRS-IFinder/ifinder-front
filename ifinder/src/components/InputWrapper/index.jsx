import { ErrorMessage } from "@/components";
import s from "@/styles/pages/login.module.scss"

export function InputWrapper({ children, text, error }) {
  return (
    <label className={s.box}>
      {text && <span>{text}</span>}
      <div>
        {children}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </label>
  );
}
