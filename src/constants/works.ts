import { Work } from "@/components/WorkCard";

const works: Work[] = [
  {
    positionTitle: "Software Engineer",
    companyName: "Sphere Partners",
    description: `Refactored microservices for internal tools used by the Member Experience team. Developed and delivered new features to enable seamless group transitions for members. Participated in decision-making regarding architecture, code style, and prioritization.`,
    startDate: "2022 August",
    endDate: "2023 February",
    usedTechnologies: [
      "Nest.js",
      "React",
      "PostgreSQL",
      "Apollo Federation",
      "Retool",
    ],
    companyLink: "https://www.sphereinc.com/",
  },
  {
    positionTitle: "Software Engineer",
    companyName: "EPAM Systems",
    description: `Developed internal tools to accelerate time to market. Organized a mono repo and built a pipeline with Rush. Architected and delivered reusable micro-frontends with React and Nest.js. Actively participated in decision-making, identifying the team’s short-term goals as well as long-term goals.`,
    startDate: "2021 December",
    endDate: "2022 August",
    usedTechnologies: ["Nest.js", "React", "Next.js", "Rush"],
    companyLink: "https://www.epam.com/",
  },
  {
    positionTitle: "Full Stack Developer",
    companyName: "EdClerk",
    description: `Led a team of three developers to build a web application that manages student records, teacher and administrator records for US-based schools. Architected the backend as well as the frontend of the application. Built CI/CD pipeline to automate code deployment process.`,
    startDate: "2018 March",
    endDate: "2021 October",
    usedTechnologies: [
      "Nest.js",
      "React",
      "GraphQL",
      "MongoDB",
      "Docker",
      "AWS Lambda",
    ],
    companyLink: "https://edclerk.com/",
  },
  {
    positionTitle: "Web Developer",
    companyName: "Freelance",
    description: `Developed and deployed web applications for various local companies such as Oxymed, Yalpiz, EMU University using Node and React. Actively participated in decision making process with designers, and product owners.`,
    startDate: "2017 November",
    endDate: "2018 March",
    usedTechnologies: [
      "Express.js",
      "React",
      "MongoDB",
      "TypeScript",
      "Docker",
      "Next.JS",
    ],
  },
];

export default works;
