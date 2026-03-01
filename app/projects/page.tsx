"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);
const MotionBox = motion(Box);

const projects = [
  {
    name: "Ritmo",
    description:
      "I've turned the spreadsheet I used to track my life into an app that I'd actually use. Track habits, set reminders, and visualize your progress over time.",
    url: "https://github.com/pedrohmac",
    image: "/images/ritmo.png",
  },
  {
    name: "msvdata.com",
    description:
      "Data consulting for growing businesses. Helping companies make sense of their data through engineering, analytics, and cloud infrastructure.",
    url: "https://msvdata.com",
    image: "/images/msvdata.png",
  },
];

export default function ProjectsPage() {
  return (
    <MotionContainer
      maxW="800px"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={8}>
          Projects
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ borderColor: "gray.400" }}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "none" }}
                display="block"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width="100%"
                  height={{ base: "180px", md: "160px" }}
                  objectFit="cover"
                />
                <Box p={{ base: 4, md: 5 }}>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="semibold"
                    color="gray.800"
                    mb={1}
                  >
                    {project.name}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.600"
                    lineHeight="tall"
                  >
                    {project.description}
                  </Text>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </MotionContainer>
  );
}
