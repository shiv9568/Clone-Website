import React from "react";
import person from "../../images/person.png";
import styles from "./Home.module.css"

function Home() {
    return (
      <section className={`h-screen ${styles.full}`}>
        <div className="flex justify-between h-full">
          <div className={`bg-purple-300 w-[50%] h-full ${styles.bg} `}>
            <div className="flex ">
              <div className=" w-[20%] relative">
                <h1 className="text-4xl text-purple-400 mt-48 transform rotate-90 absolute top-0 left-0 w-10 font-medium ">
                  About
                </h1>
              </div>
              <div className=" w-[80%] h-[100%] mr-14">
                <img src={person} className={`mt-16  mr-22 ${styles.image}`} />
              </div>
            </div>
          </div>
          <div className={`bg-black w-[50%] h-full ${styles.right}`}>
            <nav className="">
              <ul className="flex flex-row justify-around mt-3 text-white text-xl font-medium">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Content</a>
                </li>
              </ul>
            </nav>
            <div className="w-[50%] h-[50%] mt-40  flex items-center  flex-col space-y-2 justify-center z-3 ">
              <h1 className="text-white text-7xl mt-[-80px] mr-23 font-light ">
                Margot
                <br />
                Wilson
              </h1>
              <p className="text-white   font-light">
                Head of Design @AlphaDesigns
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;