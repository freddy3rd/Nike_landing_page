import React from "react";
import img from "../assets/nike.png";
export default function Footer() {
  return (
    <div className="md:grid md:grid-cols-2  px-4 content-center text-slate-50 w-full relative mt-10">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold flex-1 self-start">
          Let's Stay in Touch
        </h1>
        <div className="w-full md:max-w-[max-content] relative flex items-center mt-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="px-4 py-2 rounded-full border bg-transparent focus:outline-none w-full"
            name=""
            id=""
          />
          <button className="bg-slate-50 px-4 py-2 rounded-full absolute md:-right-10 right-0 border text-slate-900 font-bold">
            Subscribe
          </button>
        </div>
        <div className="w-1/2 self-center md:self-start p-4">
          <img src={img} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
        {[
          ["SHOP", { list: ["Mens", "Womens", "New Arrival"] }],
          ["OUR SERVICES", { list: ["Gift Card", "Maintain & Repair"] }],
          [
            "NEED HELP",
            {
              list: ["My Account", "Shipping", "Return & Exchanges", "FaQs"],
            },
          ],
          [
            "CONTACT US",
            { list: ["Find a Shoe", "Contact Us", "Terms & Condition"] },
          ],
          [
            "OUR INTERPRISE",
            { list: ["Who are We", "Pros & Cons", "Our Offices"] },
          ],
        ].map(([title, data]) => (
          <div key={title} className="flex flex-col ">
            <span className="text-xl font-bold mb-2">{title}</span>
            {data.list.map((data) => {
              return (
                <a
                  key={data}
                  className="text-sm text-slate-300 hover:cursor-pointer hover:text-slate-50   "
                >
                  {data}
                </a>
              );
            })}
          </div>
        ))}
      </div>
      <div className=" col-span-2 flex flex-col-reverse md:flex-row items-center justify-between py-4">
        <span>2020 Nike Inc. All Right Reserved. </span>
        <ul className="flex">
          {[1, 2, 3, 4].map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
