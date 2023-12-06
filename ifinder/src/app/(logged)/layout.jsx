import { Footer } from "@/components";
import { ToastProvider } from "@/context/ToastContext";

export default function LoggedLayout({ children }) {
  return (
    <>
      <ToastProvider>
        <main>{children}</main>
        <Footer />
      </ToastProvider>
    </>
  );
}
