'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  name: string
  title: string
  greeting?: string
  profileImage: string
}

const MotionBox = motion(Box)

export default function Hero({ name, title, greeting, profileImage }: HeroProps) {
  return (
    <MotionBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {greeting && (
        <MotionBox
          mb={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" textAlign="center">
            {greeting}
          </Text>
        </MotionBox>
      )}

      {/* Profile Picture */}
      <MotionBox
        position="relative"
        width={{ base: '120px', md: '140px' }}
        height={{ base: '120px', md: '140px' }}
        borderRadius="full"
        overflow="hidden"
        border="2px solid"
        borderColor="gray.200"
        mb={6}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={profileImage}
          alt="Profile Picture"
          fill
          style={{ objectFit: 'cover' }}
        />
      </MotionBox>

      {/* Name */}
      <MotionBox
        mb={2}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Heading
          as="h1"
          size={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          textAlign="center"
        >
          {name}
        </Heading>
      </MotionBox>

      {/* Title/Job */}
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" textAlign="center">
          {title}
        </Text>
      </MotionBox>
    </MotionBox>
  )
}

