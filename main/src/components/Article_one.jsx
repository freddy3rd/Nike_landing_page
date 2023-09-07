import React from "react";

import { RiArrowRightUpLine } from "react-icons/ri";
import img from "../assets/luis-felipe-lins-LG88A2XgIXY-unsplash-removebg-preview.png";
export default function ArticleOne() {
  return (
    <>
      <article className="grid text-slate-50 place-items-center gap-5 relative h-screen overflow-hidden ">
        <div className="grid justify-center items-center gap-4 w-full h-full text-center  bg-gradient-to-t from-black">
          <div>
            <p className="leading-loose tracking-wide text-4xl">THE ESSENCE </p>
            <p className="leading-loose tracking-wider text-4xl">
              HANDICRAFTED
            </p>
            <p className="leading-loose tracking-wider text-4xl">OF FOOTWEAR</p>
          </div>

          <p className="text-center leading-loose md:px-36 px-4  max-w-[1200px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            facilis vel eum veniam quas esse totam ipsum sit praesentium iusto
            recusandae vero eos perferendis, illum nisi, quasi earum! Mollitia
            in, officia ipsum sint, et doloribus, aspernatur voluptates error
            culpa illo a veritatis temporibus aperiam! Eos, officiis. Placeat
            cupiditate nam magnam repellat, officia a! Inventore magni odit
            repellendus pariatur eum voluptatem reiciendis rem in animi quis
            voluptatum, praesentium qui illo fugit!
          </p>
          <div className="flex justify-center">
            <button className="border rounded-full px-4 py-2 flex items-center">
              Fine Out More
              <RiArrowRightUpLine className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-full flex items-end justify-start absolute bottom-0 ">
          <div className="border w-full rotate-45 -z-20 opacity-25 -translate-x-80 absolute left-0"></div>
          <img
            src={img}
            alt=""
            className="-z-10 -rotate-0 -scale-x-[1] absolute -left-56 -bottom-20"
          />
        </div>
      </article>
    </>
  );
}
