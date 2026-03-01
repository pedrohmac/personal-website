'use client'

import { Box, Heading, Text, Link, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { IconType } from 'react-icons'

interface Project {
  name: string
  description: string
  url: string
  icon: IconType
}

interface ProjectsProps {
  projects: Project[]
}

const MotionBox = motion(Box)

export default function Projects({ projects }: ProjectsProps) {
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
        Projects
      </Heading>
      <Box display="flex" flexDirection="column" gap={3}>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap={3}
            color="gray.700"
            _hover={{ color: 'gray.900' }}
          >
            <Icon as={project.icon} boxSize={5} mt={0.5} flexShrink={0} />
            <Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                {project.name}
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600">
                {project.description}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
      <Link
        as={NextLink}
        href="/projects"
        fontSize={{ base: 'sm', md: 'md' }}
        color="gray.500"
        _hover={{ color: 'gray.700' }}
        mt={3}
        display="inline-block"
      >
        See all &rarr;
      </Link>
    </MotionBox>
  )
}
