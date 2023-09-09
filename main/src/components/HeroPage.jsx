import React, { useContext, useEffect, useState } from "react";

import Carousel from "./Carousel/Carousel";
import { data } from "./Carousel/Data";
import { motion } from "framer-motion";
import { selectedImageAnimation } from "../util/Animate.jsx";

export default function HeroPage() {
  const [currentId, setCurrentId] = useState(1);
  const [id, setId] = useState(0); //data id use for identifying what product is selected

  return (
    <>
      <div className="text-slate-50 relative w-full h-screen px-4 overflow-hidden -z-10">
        <div>
          <svg
            className="w-full "
            width="2495"
            height="85"
            viewBox="0 0 2495 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 84H820.5L937 1H1610L1738 84H2494.5" stroke="white" />
          </svg>
        </div>
        <div className="relative mt-4">
          <svg
            className=" -translate-x-[40%] h-full w-1/2"
            width="1210"
            height="1114"
            viewBox="0 0 1210 1114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M151.5 1L1 135.5V991L151.5 1113.5H1049.5L1209.5 991V135.5L1049.5 1H151.5Z"
              stroke="white"
            />
          </svg>
        </div>

        <div className="box md:block hidden absolute right-3 top-24 border md:w-1/3 opacity-25 md:h-4/5  -z-10"></div>
        <div className="w-full h-screen absolute top-0 left-0 flex items-center justify-center bg-gradient-to-t from-black from-25% overflow-hiddeb">
          {data.map((data) => {
            if (data.id === id) {
              return (
                <motion.h1
                  key={crypto.randomUUID()}
                  animate={{
                    opacity: [0, 1],
                    y: [-50, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="uppercase md:text-8xl text-7xl font-extrabold -z-10 opacity-25 p-4 w-full max-w-5xl text-center"
                >
                  {data.name}
                </motion.h1>
              );
            }
          })}
        </div>
      </div>
      <div className="w-full h-full relative flex items-center flex-col justify-center">
        <div className="w-[400px] h-[400px] rounded-full border absolute -left-[20%] top-[50%] translate-y-[-50%] -z-10 opacity-25"></div>
        {data.map((data) => {
          if (data.id === id) {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex md:flex-row flex-col justify-center items-center h-[max-content] relative overflow-hidden"
              >
                <motion.div
                  initial={{ x: "5%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-5%" }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full md:h-[max-content] max-w-[500px]  flex "
                >
                  <motion.img
                    layout
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    src={data.img}
                    alt=""
                    className="main-image md:translate-y-0 translate-y-20 w-full h-full aspect-square object-scale-down"
                  />
                </motion.div>
                <div className="text-slate-50 font-extrabold  flex flex-col space-y-6 px-4 w-full ">
                  <motion.div className="uppercase md:text-4xl text-3xl tracking-widest w-[20ch] overflow-hidden relative">
                    <motion.p
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5 }}
                    >
                      {data.name}
                    </motion.p>
                  </motion.div>

                  <div className="flex justify-between my-4 px-2 text-2xl overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {data.price}
                    </motion.span>
                    <motion.span></motion.span>
                  </div>
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="px-4 py-1 rounded-full w-[max-content] border hover:bg-slate-50 hover:text-slate-950"
                  >
                    Add to Card
                  </motion.button>
                </div>
              </div>
            );
          }
        })}

        <div className=" w-full px-4 mt-4">
          <Carousel setId={setId} />
        </div>
      </div>
    </>
  );
}
