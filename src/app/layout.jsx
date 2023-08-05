import './globals.css'

export const metadata = {
  title: 'NextJs',
  description: 'Estudando sobre Next Js',
}

export default function RootLayout({ children }) {
  return (

      <html lang="pt-BR">
        <body>{children}</body>
      </html>

  )
}
