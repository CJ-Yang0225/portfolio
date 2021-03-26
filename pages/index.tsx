import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

const index = (/* { skills } */) => {
  // console.log("CLIENT", skills);
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <section className="my-3 text-base font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus
        earum ipsa veniam provident cumque nostrum adipisci, nobis quis, atque
        maiores incidunt, ullam suscipit. Ullam error eveniet ducimus repellat
        quos perspiciatis quasi ea voluptatem labore?
      </section>
      <section
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100 rounded-b-2xl"
        style={{ marginLeft: "-1.55rem", marginRight: "-1.55rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {skills.map((skill) => (
            <article
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1"
              key={skill.title}
            >
              <SkillCard skill={skill} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default index;

/* 每當此頁面(about)刷新時觸發 */
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/skills");
//   const data = await res.json();

//   console.log("SERVER", skills);

//   return {
//     props: {
//       skills: data.skills,
//     },
//   };
// };

/* npm run build 時呼叫一次 */
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/skills");
//   const data = await res.json();

//   return {
//     props: {
//       skills: data.skills,
//     },
//   };
// };
