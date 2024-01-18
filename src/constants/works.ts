import { Work } from "@/components/WorkCard";

const works: Work[] = [
  {
    positionTitle: "Senior Software Engineer",
    companyName: "Exadel",
    projects: [
      {
        title: "SCOPE3.COM",
        achievements: [],
      },
    ],
    impact: "",
    startDate: "2023 December",
    endDate: "Present",
    usedTechnologies: ["Next.js", "React", "PostgreSQL", "GraphQL", "Prisma"],
    companyLink: "https://www.exadel.com/",
  },
  {
    positionTitle: "Software Engineer",
    companyName: "Sphere Partners",
    projects: [
      {
        title: "CHIEF.COM︱NEW ADMIN PANEL - CURIE",
        achievements: [
          "Developed a new user-friendly admin panel called Curie that allowed an automated approach to group transitions for the member experience team.",
          "Refactored the project into a microservice architecture, transforming the initial monolithic platform using Apollo Federation",
        ],
      },
    ],
    impact:
      " The new admin panel allowed the members’ experience team to easily track and automate group transition requests, which reduced the time to resolve these requests from 2 weeks to 3 days",
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
    projects: [
      {
        title: "WOLTERS KLUWER︱PRODUCT ACCELERATOR",
        achievements: [
          "Built and published reusable micro-frontends using Next.js and Nest.js that reduced time to market while adhering to the organization's coding conventions and security policies.",
          "Developed a CLI tool within the product accelerator to generate new projects that used the product accelerator’s template and recommended libraries.",
        ],
      },
    ],
    impact:
      "The product accelerator was used to develop a new version of the NYSE guide, which resulted in a significant reduction in time to market. This, in turn, benefited Wolters Kluwer financially",
    startDate: "2021 December",
    endDate: "2022 August",
    usedTechnologies: ["Nest.js", "React", "Next.js", "Rush"],
    companyLink: "https://www.epam.com/",
  },
  {
    positionTitle: "Full Stack Developer",
    companyName: "EdClerk",
    projects: [
      {
        title: "EDCLERK | CORE DASHBOARD",
        achievements: [
          "Architected and developed a school management web application for the US based school system",
          "Managed a team of 3 developers throughout the project building complex features such as hallway management, SpEd student reporting management, mentoring, and managing school events",
        ],
      },
      {
        title: "EDCLERK | DATA PROVIDER SYNCHRONIZATION",
        achievements: [
          "Developed school data synchronization with providers such as clever and classlink.",
          "Connected it with EdClerk Admin panel, and developed scheduling of synchronizations",
        ],
      },
    ],
    impact:
      "EdClerk has been used by multiple US based schools such as Galveston, Rapides, and Marshall ISD, serving over 5,000 students. The product has been greatly received by teachers and principals",
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
];

export default works;
