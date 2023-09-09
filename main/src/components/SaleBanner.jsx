import React from "react";
import img from "../assets/usama-akram-s-gYAbQToXk-unsplash-removebg-preview.png";
import { FaShippingFast, FaShieldAlt, FaClock, FaBox } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { motion } from "framer-motion";
import { staggerEffect } from "../util/Animate.jsx";

export default function SaleBanner() {
  return (
    <div className="relative grid w-full h-screen place-items-center text-slate-50 px-4 overflow-hidden bg-gradient-to-tr from-black ">
      <div className=" relative w-full border max-w-4xl flex md:flex-row flex-col-reverse items-center  justify-betweens">
        <div className="p-8 ">
          <h1 className="uppercase text-[35px] font-bold">
            join our nikeclub & get 15% off
          </h1>
          <p className=" capitalize mt-2">
            Sign up for free. Join the community, never pay for shipping
          </p>
          <button className="px-6 py-1 flex gap-2 items-cener rounded-full border mt-4">
            Join us
          </button>
        </div>
        <div className="h-full px-3 flex-1" style={{ marginInline: "auto" }}>
          <SiNike className=" text-9xl" />
        </div>
        <img
          src={img}
          alt=""
          className=" absolute md:z-10 -z-10 md:-right-[35%] md:-bottom-[50%] h-[320px] saleBannerImage "
        />
      </div>
      <div className="w-full h-[100px] grid md:grid-cols-4 grid-cols-2 gap-4 max-w-[1200px]">
        {[
          ["Free Delivery", "From $29.99", { mark: <FaShippingFast /> }],
          ["Free Withdrawal", "In Store", { mark: <FaShieldAlt /> }],
          ["100% Secure Payment", "All Your Service", { mark: <FaClock /> }],
          ["Redeem & Exchanges", "Offered 365 Days", { mark: <FaBox /> }],
        ].map(([title, desc, logo], index) => (
          <motion.div
            variants={staggerEffect}
            initial="initial"
            // animate={}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.05 * index }}
            key={index}
            className="flex items-center gap-3"
          >
            <span className="text-4xl"> {logo.mark}</span>
            <div>
              <span>{title}</span>
              <p className="text-sm">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
