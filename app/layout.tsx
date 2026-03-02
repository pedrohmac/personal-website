import type { Metadata } from 'next'
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: 'Pedro Macedo - Homepage',
  description: 'Pedro Macedo - Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

