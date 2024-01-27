import React from "react";
import styles from "./Work.module.css";
import project from "../../images/project.png";
import travel from "../../images/travel.png";
function Work() {
  return (
    <section className="h-screen">
      <div className={`flex justify-between flex-row ${styles.color} bg-pink-800`}>
        <div className=" w-[50%] h-[auto]">
          <div className=" mt-20 ">
            <h1 className="text-4xl font-light ml-12 text-white">
              EdTech Website
            </h1>

            <p className="text-white ml-12 mt-3 mb-1 font-medium">
              Sample Edtech Website for exploring hobby and art
            </p>
            <ul className=" flex justify-around mt-2">
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Web UI Design
              </a>
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Visual Design
              </a>
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Web Design
              </a>
            </ul>
            <div className=" mt-5 ml-8">
              <a
                href="#"
                className={`text-white px-6 outline outline-purple-400 py-2 rounded-xl w  ${styles.live}`}
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-[auto]">
          <div className=" mt-10 ml-10">
            <img src={project} />
          </div>
        </div>
      </div>
      <div className={`flex ${styles.bg} `}>
        <div className=" w-[53.6%] h-[50vh] flex justify-between">
          <div className="">
            <h1
              className={`text-4xl text-purple-400 mt-28  translate-x-0 w-10 font-medium ${styles.rotate}`}
            >
              Work
            </h1>
          </div>
          <div className=" mr-12">
            <div className=" mt-14">
              <img src={travel} />
            </div>
          </div>
        </div>
        <div className=" w-[70%]">
          <div className=" mt-20 ">
            <h1 className="text-4xl font-light ml-12 text-white">
              Travel Website
            </h1>

            <p className="text-white ml-12 mt-3 mb-1 font-medium">
              Sample Travel agency website providing world tours
            </p>
            <ul className=" flex justify-around mt-2">
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Web UI Design
              </a>
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Visual Design
              </a>
              <a
                href="#"
                className={`text-white px-3 py-2 rounded-xl ${styles.button}`}
              >
                Web Design
              </a>
            </ul>
            <div className=" mt-5 ml-8">
              <a
                href="#"
                className={`text-white px-6 outline outline-purple-400 py-2 rounded-xl ml-4  ${styles.live}`}
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
