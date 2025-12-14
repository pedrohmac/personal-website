'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function ProjectsPage() {
  return (
    <Container maxW="800px" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
      <VStack align="stretch" spacing={6}>
        <Box>
          <Heading
            as="h1"
            size={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            mb={4}
          >
            Projects
          </Heading>
        </Box>

        <Box>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
            This is the projects page. Add your projects, portfolio items, and
            work samples here.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

