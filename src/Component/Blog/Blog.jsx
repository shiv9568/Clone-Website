import React from "react";
import styles from "./Blog.module.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";

function Blog() {
  return (
    <section className={`h-screen ${styles.Blog}`}>
      <div className={` h-full py-20 flex justify-stretch `}>
        <div className=" w-[10%] h-full">
          <div className="w-[30%] h-[30vw] ">
            <h1
              className={`mx-2 my-10 mt-60 text-5xl font-normal text-purple-400 ${styles.rotate} `}
            >
              Blog
            </h1>
          </div>
        </div>
        <div className=" w-[53.3%] mr-[18vw] ">
          <img src={img1} alt="" width="490" height="400" className=" " />
          <h1 className="text-3xl  text-white font-semibold">
            Why UX is changing the world
          </h1>
          <p className=" text-white font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
            tempora error, animi officiis eius minima provident, voluptates hic
            aut expedita reiciendis. Corporis provident et eum animi modi.{" "}
            <span className="text-purple-900 font-bold cursor-pointer">
              Read Me
            </span>
          </p>
        </div>
        <div className="w-[45%] ml-[-5]">
          <div>
            <img src={img2} />
            <h1 className="text-3xl  text-white font-semibold">
              How to get started as a UX designer
            </h1>
            <p className=" text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
              tempora error, animi officiis eius minima provident, voluptates
              hic aut expedita reiciendis. Corporis provident et eum animi modi.{" "}
              <span className="text-purple-900 font-bold cursor-pointer">
                Read Me
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
