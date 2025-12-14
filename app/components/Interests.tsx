'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface InterestsProps {
  interests: string[]
}

const MotionBox = motion(Box)

export default function Interests({ interests }: InterestsProps) {
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
        Interests
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="tall">
        {interests.join(', ')}
      </Text>
    </MotionBox>
  )
}

