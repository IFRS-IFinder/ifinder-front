"use client";
import { ImageProfileFallback } from "@/components";
import { useState } from "react";

export function Card({
  profileImage,
  name,
  age,
  description,
  hoobies,
  cardContent,
  sex,
}) {
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div>

      {/*todo retirar botão */}
      <button onClick={() => setIsProfile((old) => !old)}>Profile</button>

      <div>
        <ImageProfileFallback src={profileImage} width={100} heigth={100} />
        <h2>{name}</h2>
        {age}
        {sex}
      </div>

      {isProfile ? (
        <div>
          <p>{description}</p>
          <p>{hoobies}</p>
        </div>
      ) : (
        <div>
          <p>{cardContent}</p>
        </div>
      )}
    </div>
  );
}
