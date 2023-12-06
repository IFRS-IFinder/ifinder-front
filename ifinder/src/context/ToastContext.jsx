"use client";
import { Toast } from "@/components/Toast";
import { createContext, useContext, useMemo, useState } from "react";
import s from "@/styles/context/ToastContext.module.scss";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function openToastSuccess(message) {
    const newToast = {
      id: Date.now(),
      type: "success",
      message: message,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }

  function openToastError(message) {
    const newToast = {
      id: Date.now(),
      type: "error",
      message: message,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }

  function closeToast(id) {
    setToasts((oldToasts) => oldToasts.filter((t) => t.id !== id));
  }

  const valueToast = useMemo(
    () => ({
      success: openToastSuccess,
      error: openToastError,
    }),
    []
  );

  return (
    <ToastContext.Provider value={valueToast}>
      <>{children}</>

      <div className={s.toastBox}>
        {toasts &&
          toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => closeToast(toast.id)}
            />
          ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
