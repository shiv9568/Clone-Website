import React from "react";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={`h-screen ${styles.bg}`}>
      <div className=" py-10 h-full flex justify-between">
        <div className=" w-[10%] ">
          <div className="w-[29%] ">
            <h1
              className={`mx-2 my-10 mt-60 text-5xl font-normal text-purple-400 ${styles.rotate} `}
            >
              Contact
            </h1>
          </div>
        </div>

        <div className=" w-[80%] ml-8 ">
        <div className="mt-9 w-[60%] h-[75vh] ml-28 border-2 border-black shadow-xl  backdrop-blur-lg">
            <div className="flex flex-col py-10">
                <div className="mb-16">
                    <input
                        type="text"
                        placeholder="Name"

                        className="appearance-none border-none focus:outline-none bg-transparent w-1/2 mb-4 text-white"
                    />
                    <hr className="border-t-3 border-purple bg-pink-950" />
                </div>

                <div className="mb-16">
                    <input
                        type="text"
                        placeholder="Email"
                        className="appearance-none border-none focus:outline-none bg-transparent w-1/2 mb-4 text-white"
                    />
                    <hr className="border-t-3 border-white" />
                </div>

                <div className="mb-16">
                    <input
                        type="text"
                        placeholder="Subject"
                        className="appearance-none border-none focus:outline-none bg-transparent w-1/2 mb-4 text-white"
                    />
                    <hr className="border-t-3 border-white" />
                </div>

                <div className="mb-16">
                    <input
                        type="text"
                        placeholder="Message"
                        className="appearance-none border-none focus:outline-none bg-transparent w-1/2 mb-4 text-white"
                    />
                    <hr className="border-t-3 border-white" />
                </div>
                <div className=" flex justify-around ">
                  <button className={`${styles.but} py-2 px-10 rounded-3xl text-white font-medium`}>Submit</button>
                  <button className={`${styles.but} py-2 px-10 rounded-3xl text-white font-medium`}>Download Cv</button>
                  
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
