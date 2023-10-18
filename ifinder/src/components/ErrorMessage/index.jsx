

export function ErrorMessage({ children }) {
  return <p>{children}</p>;
}

ErrorMessage.defaultProps = {
    children: "Ocorreu um erro inesperado!"
};
