"use client";

import { useState } from "react";

const SideBar = () => {
  const [maxPrice, setMaxPrice] = useState(100);
  return (
    <section className="w-full md:p-10 flex flex-col gap-2 md:gap-10">
      {/* type */}
      <div className="w-full">
        {/* title */}
        <h2 className="text-secondinary-light-300 font-bold text-xs mb-2 md:text-sm md:mb-4">T Y P E</h2>
        {/* checkbox */}
        <div className="w-full">
          <ul className="flex flex-col gap-2">
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">Sport</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(10)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">SUV</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(12)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">MPV</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(16)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">Sedan</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(20)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">Coupe</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(14)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">Hatchback</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(14)</span>
            </li>
          </ul>
        </div>
      </div>
      {/* capacity */}
      <div className="w-full">
        {/* title */}
        <h2 className="text-secondinary-light-300 font-bold text-xs md:text-sm mb-2 md:mb-4">C A P A C I T Y</h2>
        {/* checkbox */}
        <div>
          <ul className="flex flex-col gap-2">
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">2 Person</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(10)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">4 Person</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(14)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">6 Person</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(12)</span>
            </li>
            <li className="w-full flex items-center ">
              <input type="checkbox" className="rounded focus:ring-0 mr-2" />
              <label className="text-secondinary-light-400 text-sm md:text-base font-bold mr-2">8 or More</label>
              <span className="text-secondinary-light-300 text-xs md:text-sm">(10)</span>
            </li>
          </ul>
        </div>
      </div>
      {/* price */}
      <div>
        {/* title */}
        <h2 className="text-secondinary-light-300 font-bold text-xs md:text-sm mb-2 md:mb-4">P R I C E</h2>
        {/* range box */}
        <div className="flex flex-row md:flex-col gap-2">
          <input
            type="range"
            min={0}
            max={150}
            value={maxPrice}
            className="w-[50%] md:w-full"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span className="text-secondinary-light-400 text-sm md:text-lg font-bold">Max. ${maxPrice}.00</span>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
