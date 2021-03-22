import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import { skills } from "../data/skills";

const index = () => {
  // console.log(skills);
  return <div>My About</div>;
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const data = await (await fetch("http://localhost:3000/api/skills")).json();

//   return {
//     props: {
//       skills: data.skills,
//     },
//   };
// };
