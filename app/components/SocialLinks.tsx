'use client'

import { Box, Link, Text, VStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface SocialLink {
  name: string
  url: string
  icon: IconType
  description?: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

const MotionBox = motion(Box)
const MotionLink = motion(Link)

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      pt={4}
    >
      <VStack align="stretch" gap={4}>
        {links.map((link, index) => (
          <MotionLink
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="flex-start"
            gap={3}
            color="gray.700"
            _hover={{ color: 'gray.900' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
          >
            <Icon as={link.icon} boxSize={5} mt={0.5} flexShrink={0} />
            <Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                {link.name}
              </Text>
              {link.description && (
                <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600" mt={0.5}>
                  {link.description}
                </Text>
              )}
            </Box>
          </MotionLink>
        ))}
      </VStack>
    </MotionBox>
  )
}

