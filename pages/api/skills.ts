import { NextApiRequest, NextApiResponse } from "next";
import { skills } from "../../data/skills";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ skills });
};
