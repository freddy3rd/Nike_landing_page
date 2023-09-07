import React from "react";
import { SiNike } from "react-icons/si";
import { FaSearch, FaShoppingBasket, FaBars } from "react-icons/fa";
export default function Navigation() {
  return (
    <div className="text-slate-50 grid grid-cols-3 items-center font-semibold p-2 px-6">
      <ul className="md:flex space-x-6 hidden now">
        {[
          ["Home", "/"],
          ["New Arrival", "/Narr"],
          ["Men", "/Men"],
          ["Women", "/Women"],
          ["Kids", "/kids"],
        ].map(([title, url]) => (
          <a
            className="whitespace-nowrap px-2 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
            key={url}
            to={url}
          >
            {title}
          </a>
        ))}
      </ul>
      <div className="md:hidden">
        <FaBars />
      </div>

      <div className="flex text-4xl justify-center">
        <SiNike />
      </div>
      <div className="flex gap-2 justify-end">
        <FaSearch />
        <FaShoppingBasket />
      </div>
    </div>
  );
}
