'use client'

import { Box, Flex, Button, Icon, Link, Stack } from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import NextLink from 'next/link'
import { useState, useEffect, useRef } from 'react'

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
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={4}
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
          _hover={{ bg: 'gray.100', color: 'gray.900' }}
        >
          <Icon as={HiMenu} boxSize={5} />
        </Button>
        {isOpen && (
          <Box
            position="absolute"
            top="100%"
            right={0}
            mt={2}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
            minW="150px"
            py={2}
          >
            <Stack gap={2} px={4}>
              <Link
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
              </Link>
            </Stack>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

