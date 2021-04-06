import { IconType } from "react-icons/lib";

export type Services = {
  Icon: IconType;
  title: string;
  about: string;
};

export type Skills = {
  Icon: IconType;
  name: string;
  level: string;
};

export type Projects = {
  name: string;
  description: string;
  image_path: string;
  github_url: string;
  deployed_url: string;
  category: Category[];
  key_techs: string[];
};

export type Category = "React" | "VanillaJS" | "GraphQL" | "Firebase";
