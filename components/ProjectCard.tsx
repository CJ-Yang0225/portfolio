import React, { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../data/types";

import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({
  project: {
    name,
    description,
    imagePath,
    githubUrl,
    deployedUrl,
    category,
    keyTechs,
  },
}) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <>
      <figure className="w-full overflow-hidden bg-gray-200 dark:bg-dark-300 rounded-2xl">
        <Image
          src={imagePath}
          alt={name}
          layout="responsive"
          height="256"
          width="320"
          className="w-full cursor-pointer md:h-48 h-80"
          onClick={() => setIsShowDetail(true)}
        />
        <figcaption className="py-2 text-center">{name}</figcaption>
      </figure>
      {isShowDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full p-8 bg-gray-200 rounded-lg md:grid-cols-2 gap-x-12 dark:bg-dark-500">
          <figure>
            <Image
              src={imagePath}
              alt={name}
              layout="responsive"
              height="256"
              width="320"
            />
            <div className="flex items-center justify-center my-4 space-x-3">
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 rounded-lg bg-dark-200"
              >
                <AiFillGithub size="24" className="mr-1" />
                <span>Github</span>
              </a>
              <a
                href={deployedUrl}
                className="flex items-center px-4 py-2 rounded-lg bg-dark-200"
              >
                <AiFillProject size="24" className="mr-1" />
                <span>Project</span>
              </a>
            </div>
          </figure>
          <div>
            <figcaption className="text-2xl">{name}</figcaption>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veniam id? Magnam ullam esse perspiciatis?
            </p>
            <div className="flex flex-wrap justify-items-start">
              {keyTechs.map((keyTech) => (
                <span
                  className="px-2 py-1 my-1 mr-3 rounded-lg bg-dark-200"
                  key={keyTech}
                >
                  {keyTech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setIsShowDetail(false)}
              className="absolute bg-gray-200 rounded-full top-2 right-2 focus:outline-none dark:bg-dark-300"
            >
              <MdClose size="30" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
