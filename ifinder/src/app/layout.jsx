import s from "@/styles/globals.module.scss"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={s.body}>{children}</body>
    </html>
  )
}
