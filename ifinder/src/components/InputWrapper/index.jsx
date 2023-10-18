import { ErrorMessage } from "@/components";


export function InputWrapper({ children, text, error }) {
  return (
    <label>
      {text && <span>{text}</span>}
      <div>
        {children}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </label>
  );
}
