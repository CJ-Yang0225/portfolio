import { IconType } from "react-icons/lib";

export type Service = {
  Icon: IconType;
  title: string;
  about: string;
};

export type Skill = {
  Icon: IconType;
  name: string;
  level: string;
};

export type Project = {
  name: string;
  description: string;
  imagePath: string;
  githubUrl: string;
  deployedUrl: string;
  category: Category[];
  keyTechs: string[];
};

export type Category = "React" | "TypeScript" | "GraphQL" | "Firebase";
