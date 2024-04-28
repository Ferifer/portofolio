import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Back-End Developer",
    location: "Jakarta",
    description:
      "I worked as a back-end developer for 2 years in 5 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Jakarta",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Audit Management System",
    description:
      "I worked as a back-end developer on this company project for 1 years.",
    tags: ["Python", "FlaskAPI", "MS SQL SERVER", "SQLALchemy"],
    imageUrl: corpcommentImg,
  },
  {
    title: "DEX",
    description:
      "I worked as a back-end developer on this company project for 6 month.",
    tags: [
      "NestJs",
      "TypeScript",
      "Prisma",
      "TypeOrm",
      "PostgreSql",
      "JWT-Auth",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Property Management",
    description:
      "I worked as a back-end developer on this company project for 8 month.",
    tags: [
      "NestJs",
      "TypeScript",
      "Prisma",
      "TypeOrm",
      "PostgreSql",
      "JWT-Auth",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Implement KNIME",
    description:
      "I worked as a knime nodes developer on this company project for 3 month.",
    tags: ["KNIME", "BASH", "CRON", "MS SQL Server"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Hospital Information System",
    description:
      "I worked as a back-end developer on this company project for 6 month.",
    tags: [
      "NestJs",
      "TypeScript",
      "Prisma",
      "TypeOrm",
      "PostgreSql",
      "JWT-Auth",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "FlaskAPI",
  "FASTAPI",
  "Django",
] as const;
