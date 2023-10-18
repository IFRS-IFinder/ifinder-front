
export function SuccessMessage({ children }) {
  return <p>{children}</p>;
}

SuccessMessage.defaultProps = {
    children: "Ocorreu um erro inesperado!"
};
