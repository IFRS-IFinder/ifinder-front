import { Footer } from "@/components";

export default function LoggedLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
