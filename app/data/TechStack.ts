import { IconName } from "@/app/types/icons";

export const TECHSTACK: {
  [index: string]: { label: string; iconName: IconName }[];
} = {
  frontend: [
    { label: "JavaScript", iconName: "javascript" },
    { label: "TypeScript", iconName: "typescript" },
    { label: "ReactJS", iconName: "reactjs" },
    { label: "NextJS", iconName: "nextjs" },
    { label: "GSAP", iconName: "gsap" },
    { label: "Bootstrap", iconName: "bootstrap" },
    { label: "Sass", iconName: "sass" },
    { label: "TailwindCSS", iconName: "tailwindcss" },
  ],
  backend: [
    { label: "NodeJS", iconName: "nodejs" },
    { label: "ExpressJS", iconName: "expressjs" },
    { label: "JWT", iconName: "jwt" },
  ],
  database: [
    { label: "MongoDB", iconName: "mongodb" },
    { label: "MySQL", iconName: "mysql" },
    { label: "Prisma", iconName: "prisma" },
  ],
  tools: [
    { label: "Figma", iconName: "figma" },
    { label: "Git", iconName: "git" },
    { label: "Trae", iconName: "trae" },
    { label: "VS Code", iconName: "vscode" },
  ],
};
