"use client";
import s from "@/styles/components/Toast.module.scss";
import { useEffect, useRef } from "react";

function useTimeout(callback) {
  const timeoutRef = useRef(callback);

  useEffect(() => {
    timeoutRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timeout = setTimeout(() => timeoutRef.current(), 3000);
    return () => clearTimeout(timeout);
  }, []);
}

export function Toast({ message, type, onClose }) {
   useTimeout(onClose);

  return (
    <div className={`${s.toast} ${s[type]}`}>
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
}
