import { motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { scrollProgress } from "../util/Animate.jsx";

export default function BestSeller() {
  const baseUrl = "http://source.unsplash.com/";

  const conRef = useRef(null);
  const { scrollYProgress } = scrollProgress(conRef);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const translateProgress = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "0%"]
  );

  return (
    <motion.div
      ref={conRef}
      className="grid w-full relative place-items-center text-slate-50 p-8 "
    >
      <h1 className=" font-extrabold text-4xl mb-10">BEST SELLERS</h1>
      <div className="grid w-full grid-cols-3 gap-3 max-w-[1200px]">
        {["NoVnXXmDNi0", "SD9Jyl1xNQ4", "ZBuWS1el_50"].map((data, index) => (
          <motion.img
            // initial={{ y: `${-50 * index}%` }}
            style={{
              opacity: opacityProgress,
              y: translateProgress,
            }}
            key={data}
            src={baseUrl + data}
            alt=""
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </motion.div>
  );
}
