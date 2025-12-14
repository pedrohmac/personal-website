'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function WorkPage() {
  return (
    <Container maxW="800px" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
      <VStack align="stretch" gap={6}>
        <Box>
          <Heading
            as="h1"
            size={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            mb={4}
          >
            Work
          </Heading>
        </Box>

        <Box>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
            This is the work page. Add your work details, projects, and
            professional experience here.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

