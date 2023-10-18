import Image from "next/image";

export function ProfileBox({ name, age, sex, imageProfile, isAuthor }) {
  return (
    <div>
      <Image src={imageProfile} width={30} height={30} alt="Foto de perfil" />
      {name}
      {age}
      {sex}

      {isAuthor && (
        <div>
          <button>Editar perfil</button>
          <button>Editar perfil</button>
        </div>
      )}
    </div>
  );
}
