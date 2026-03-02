'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), { ssr: false })

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      {children}
    </ChakraProvider>
  )
}

