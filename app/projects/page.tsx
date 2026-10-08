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
    name: "Maestro",
    description: "An open source macOS project board run by AI coding agents.",
    url: "https://getmaestro.dev/",
    image: "/images/maestro.svg",
  },
  {
    name: "Ritmo",
    description:
      "I've turned the spreadsheet I used to track my life into an app that I'd actually use.",
    url: "https://github.com/pedrohmac",
    image: "/images/ritmo.png",
  },
  {
    name: "msvdata.com",
    description: "Data consulting for growing businesses.",
    url: "https://msvdata.com",
    image: "/images/msvdata.png",
  },
  {
    name: "MatScore",
    description:
      "An interactive scoreboard for Brazilian Jiu-Jitsu tournaments.",
    url: "https://matscore.net",
    image: "/images/matscore.svg",
  },
  {
    name: "nevershort",
    description: "A Shopify app that tells merchants what to reorder and when.",
    url: "https://nevershort.app",
    image: "/images/nevershort.svg",
  },
  {
    name: "AdGit",
    description: "Git-style version control for ad campaigns.",
    url: "https://adgit.io",
    image: "/images/adgit.svg",
  },
  {
    name: "Quita Fácil",
    description: "An AI debt payoff planner for Brazil.",
    url: "https://quitafacil.net",
    image: "/images/quitafacil.svg",
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
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={16}
        >
          Projects
        </Heading>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 4, md: 6 }}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              textAlign="center"
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
                  boxSize={{ base: "72px", md: "80px" }}
                  borderRadius="22%"
                  objectFit="cover"
                  mx="auto"
                  boxShadow="0 4px 14px rgba(0, 0, 0, 0.15)"
                />
                <Box mt={3}>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="semibold"
                    color="gray.800"
                    mb={1}
                  >
                    {project.name}
                  </Text>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="gray.600"
                    lineHeight="base"
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
