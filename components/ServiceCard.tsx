import React from "react";
import { Services } from "../data/types";

type Props = {
  service: Services;
};

const ServiceCard: React.FC<Props> = ({ service: { Icon, title, about } }) => {
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

export default ServiceCard;
