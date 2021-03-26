import React from "react";
import { Skills } from "../data";

type Props = {
  skill: Skills;
};

const SkillCard: React.FC<Props> = ({ skill: { Icon, title, about } }) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-14 h-14 text-green" />
      <div>
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={{__html: about}}/>
      </div>
    </div>
  );
};

export default SkillCard;
