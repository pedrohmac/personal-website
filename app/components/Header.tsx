'use client'

import { Box, Flex, Button, Icon, Link, Stack } from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import NextLink from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(4px)"
      borderBottom="1px"
      borderColor="gray.200"
      py={2}
      px={{ base: 4, md: 8 }}
    >
      <Flex
        as="nav"
        justify="flex-end"
        align="center"
        maxW="1200px"
        mx="auto"
        position="relative"
        ref={menuRef}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          aria-label="Navigation menu"
          color="gray.700"
          border="1px solid"
          borderColor="gray.300"
          width="45px"
          height="40px"
          minW="40px"
          padding={0}
          _hover={{ bg: 'gray.100', color: 'gray.900' }}
        >
          <Icon as={HiMenu} boxSize={5} />
        </Button>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                backgroundColor: 'white',
                border: '1px solid',
                borderColor: '#E2E8F0',
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                minWidth: '150px',
                paddingTop: '8px',
                paddingBottom: '8px',
                transformOrigin: 'top right',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Stack gap={2} px={4}>
                <Link
                  as={NextLink}
                  href="/"
                  color="gray.700"
                  _hover={{ color: 'gray.900' }}
                  onClick={() => setIsOpen(false)}
                >
                  home
                </Link>
                {/* <Link
                  as={NextLink}
                  href="/work"
                  color="gray.700"
                  _hover={{ color: 'gray.900' }}
                  onClick={() => setIsOpen(false)}
                >
                  work
                </Link>
                <Link
                  as={NextLink}
                  href="/posts"
                  color="gray.700"
                  _hover={{ color: 'gray.900' }}
                  onClick={() => setIsOpen(false)}
                >
                  posts
                </Link>
                <Link
                  as={NextLink}
                  href="/projects"
                  color="gray.700"
                  _hover={{ color: 'gray.900' }}
                  onClick={() => setIsOpen(false)}
                >
                  projects
                </Link> */}
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  )
}

