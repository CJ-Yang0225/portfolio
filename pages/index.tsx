import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const index = (/* { services } */) => {
  // console.log("CLIENT", services);
  return (
    <main className="flex flex-col flex-grow px-6 pt-1">
      <section className="my-3 text-base font-medium">
        我是楊朝傑，我目前是中科大資工系四年級學生，學科成績優異，並熱衷於Front-End
        和 App 開發。
        <br />
        我的個性謹慎、有條理，在團隊合作中能發揮協調能力。在學時間，我透過校內課程、
        研究計畫、實習經驗及自主學習夯實自身程式設計及專案管理的能力，保持自身積極態度不斷累積專業。
      </section>
      <section
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <article
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:dark:bg-dark-300 dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default index;

/* 每當此頁面(about)刷新時觸發 */
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

/* npm run build 時呼叫一次 */
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
