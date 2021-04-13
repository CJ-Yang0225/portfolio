import React from "react";
import BarChart from "../components/BarChart";
import { languages, tools } from "../data/skills";

const Resume = () => {
  return (
    <main className="px-6 py-2">
      <section className="grid gap-6 md:grid-cols-2">
        <article>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              commodi dolores repudiandae autem, reiciendis accusantium.
            </p>
          </div>
        </article>
        <article>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </article>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <article>
          <h5 className="my-2 text-2xl font-bold">Languages</h5>
          {languages.map(({ Icon, name, level }) => (
            <BarChart Icon={Icon} name={name} level={level} />
          ))}
        </article>
        <article>
          <h5 className="my-2 text-2xl font-bold">Tools</h5>
          {tools.map(({ Icon, name, level }) => (
            <BarChart Icon={Icon} name={name} level={level} key={name}/>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Resume;
