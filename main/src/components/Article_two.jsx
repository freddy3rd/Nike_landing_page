import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

// VxzlyJk-2to
export default function ArticleTwo() {
  return (
    <div className="grid relative w-full md:h-screen h-full text-slate-50 justify-center items-center gap-4 px-4 content-center ">
      <div className="grid  md:grid-cols-2  w-full max-w-[1200px]">
        <div className=" relative">
          <div className="w-full h-[300px] relative">
            <img
              src="http://source.unsplash.com/VxzlyJk-2to"
              className="articleTwo_image top-0 left-0 w-full h-full  object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="px-4 flex flex-col gap-4">
          <p className="md:text-start text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            doloremque perferendis optio eos est minus dignissimos provident
            voluptate repellat minima, aperiam natus maiores dolore harum! Quas
            molestias dolore quod! Voluptas ut quibusdam minima modi nisi illo
            reiciendis vel hic non?
          </p>
          <div>
            <button className="md:max-w-[max-content] w-full  px-4 py-2 rounded-full border font-semibold flex items-center justify-center gap-1">
              Customization Availability
              <RiArrowRightUpLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
