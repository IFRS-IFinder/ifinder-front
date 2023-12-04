"use client"; 

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Algo deu errado, tente novamente!</h2>
      <button onClick={() => reset()}>Tente novamente</button>
    </div>
  );
}
