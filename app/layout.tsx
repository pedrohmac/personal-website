import type { Metadata } from 'next'
import Header from './components/Header'
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

