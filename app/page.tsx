'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <Container maxW="800px" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
      <Box display="flex" flexDirection="column" gap={8}>
        {/* Profile Picture */}
        <Box display="flex" justifyContent="center" mb={1}>
          <Box
            position="relative"
            width={{ base: '120px', md: '120px' }}
            height={{ base: '120px', md: '120px' }}
            borderRadius="full"
            overflow="hidden"
            border="2px solid"
            borderColor="gray.200"
          >
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>

        {/* Name */}
        <Box>
          <Heading
            as="h1"
            size={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            mb={2}
            textAlign="center"
          >
            Pedro Macedo
          </Heading>
        </Box>

        {/* Title/Job */}
        <Box>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" textAlign="center">
            Data Engineer @ Hippo
          </Text>
        </Box>

        {/* Work Section */}
        <Box>
          <Heading
            as="h2"
            size={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mb={4}
          >
            Work
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Box>

        {/* Bio Section */}
        <Box>
          <Heading
            as="h2"
            size={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mb={4}
          >
            Bio
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Box>

        {/* Hobby Section */}
        <Box>
          <Heading
            as="h2"
            size={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mb={4}
          >
            Hobbies
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
        </Box>

        {/* Social Links */}
        <Box pt={4}>
          <Box display="flex" gap={6} flexWrap="wrap">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.700"
              _hover={{ color: 'gray.900' }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaInstagram} boxSize={5} />
              <Text fontSize={{ base: 'sm', md: 'md' }}>Instagram</Text>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.700"
              _hover={{ color: 'gray.900' }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaGithub} boxSize={5} />
              <Text fontSize={{ base: 'sm', md: 'md' }}>GitHub</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

