"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaMobileAlt, FaGlobe, FaLaptopCode } from "react-icons/fa";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Bio from "./components/Bio";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

const MotionContainer = motion(Container);
const MotionVStack = motion(VStack);

// Data configuration
const bioEvents = [
  { year: "1997", event: "Born in the south of Brazil" },
  { year: "2017", event: "Infantryman at Brazilian Army" },
  { year: "2019", event: "Data Engineer at EEmovel" },
  { year: "2022", event: "Software Engineer at ChangeCX" },
  { year: "2024", event: "Data Engineer at Hippo" },
];

const workDescription = `A data engineer and cloud-focused developer, with a strong drive to build systems that actually work in the real world. I enjoy turning messy, complex problems into clean, scalable solutions. Offline, I'm usually training combat sports or behind a camera, either driving, camping or hiking.`;

const interests = [
  "Data Engineering",
  "Combat Sports",
  "Videography",
  "Traveling",
  "Hiking",
  "Reading",
  "Cooking",
];

const projects = [
  {
    name: "Maestro",
    description:
      "Manage software projects with AI agents — no coding required",
    url: "https://github.com/pedrohmac/maestro",
    icon: FaLaptopCode,
  },
  {
    name: "Ritmo",
    description:
      "I've turned the spreadsheet I used to track my life into an app that I'd actually use",
    url: "https://github.com/pedrohmac",
    icon: FaMobileAlt,
  },
  {
    name: "msvdata.com",
    description: "Data consulting for growing businesses",
    url: "https://msvdata.com",
    icon: FaGlobe,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/pedrohmac",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pedrohmac",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pedro-hmac/",
    icon: FaLinkedin,
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com',
  //   icon: FaTwitter,
  // },
];

export default function Home() {
  return (
    <MotionContainer
      maxW="800px"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MotionVStack
        align="stretch"
        gap={10}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Hero
          name="Pedro Macedo"
          title="Data Engineer @ Hippo"
          profileImage="/images/profile.png"
        />

        <Work description={workDescription} />

        <Bio events={bioEvents} />

        <Interests interests={interests} />

        <Projects projects={projects} />

        <SocialLinks links={socialLinks} />
      </MotionVStack>
    </MotionContainer>
  );
}
