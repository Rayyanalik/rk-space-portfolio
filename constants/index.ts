import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/rayyanalikhann/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mohammed-ali-rayyan-4aa377257/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "DevOPS",
    image: "devOps.png",
    width: 60,
    height: 60,
  },
] as const;
  
export const PROJECTS = [
  {
    title: "Mental Health App",
    description:
      'An Inititaive that is drived by and for keeping ones mental health a priority and in check - A dynamic showcase of my skills, experiences, and passion for making a social impact through web development. It gives you an immersive insight into how you could get diagnosed and how we could help you with some intimate treatment plans which will be anonymous to you . Trusting us would be a safe and secure way to get the help you need. ',
    image: "/projects/project-1.png",
    link: "https://rayyanalik.github.io/RKmentalcare/",
  },
  {
    title: "UI Designed Gaming console Dashboard",
    description:
      'Step into the extraordinary world of my professional journey in Design through the "Gaming console Dashboard UI Design" - Gaming is not just a hobby—its an immersive journey, an escape, and a connection to a vibrant community of players. To amplify that experience, we’ve designed a Gaming Console Dashboard that blends cutting-edge aesthetics with unparalleled functionality . Whether youre diving into an epic quest, chatting with friends, or customizing your gameplay, this dashboard is your all-in-one portal to next-level gaming.',
    image: "/projects/project-2.png",
    link: "https://www.figma.com/proto/l6o0FuWc7Sojh7XvGgu2MO/Gaming-Console-UI-Design?page-id=0%3A1&node-id=2-2&t=XUqrQYols4h3KPfh-1",
  },
  {
    title: "UI Designed Nike Jordan Dashboard",
    description:
      'In today’s fast-paced world, your time is valuable. The Nike Dashboard seamlessly integrates everything you love about Nike into one centralized hub. From fitness tracking and exclusive shopping recommendations to order updates and rewards progress—every feature is crafted to put you in control and make your experience smarter, faster, and more inspiring.',
    image: "/projects/project-4.png",
    link: "https://www.figma.com/design/nfoMgczDj31s83d3myjGB4/Nike-Website-UI-Design?node-id=0-1&t=6rHjEI1D79zWzXPY-1",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Rayyanalik",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/rk8401",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/rayyanalikhann/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/mohammed-ali-rayyan-4aa377257/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:rayyanalik841@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Rayyanalik/rk-space-portfolio",
};
