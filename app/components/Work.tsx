'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface WorkProps {
  description: string
}

const MotionBox = motion(Box)

export default function Work({ description }: WorkProps) {
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
        Work
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
        {description}
      </Text>
    </MotionBox>
  )
}

