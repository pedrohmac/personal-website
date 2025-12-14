'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface BioEvent {
  year: string
  event: string
}

interface BioProps {
  events: BioEvent[]
}

const MotionBox = motion(Box)

export default function Bio({ events }: BioProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading
        as="h2"
        size={{ base: 'md', md: 'lg' }}
        fontWeight="semibold"
        mb={4}
      >
        Bio
      </Heading>
      <VStack align="stretch" gap={3}>
        {events.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
              <Text as="span" fontWeight="semibold" color="gray.900">
                {item.year}
              </Text>
              {' '}
              {item.event}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </MotionBox>
  )
}

