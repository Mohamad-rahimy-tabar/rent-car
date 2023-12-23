"use client";
import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
const Filter = ({ type = "normal" }) => {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div
      className={`${
        type === "normal" && "gap-2"
      } w-full p-2 md:p-0 flex flex-col md:flex-row items-stretch justify-center mb-4`}
    >
      {/* pick-up */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-300" : "bg-primary-white"
        } md:p-4 p-2 flex flex-col w-full md:flex-1 rounded-md`}
      >
        <div className="flex items-center mb-4">
          <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
          <h1 className="font-bold text-sm md:text-base">Pick - Up</h1>
        </div>
        <div className="flex items-center justify-around w-full">
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 border-r-2 p-2 border-[#C3D4E966]">
            <label className="font-bold text-sm md:text-base">Locations</label>
            <select
              className={`${
                darkmode
                  ? "bg-secondinary-light-300 text-primary-white"
                  : "text-secondinary-light-300"
              } py-0 w-full text-[10px] md:text-sm outline-none border-none focus:ring-0`}
            >
              <option className="text-secondinary-Default">Your City</option>
              <option>German</option>
              <option>USA</option>
              <option>France</option>
            </select>
          </div>
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 border-r-2 p-2 border-[#C3D4E966]">
            <label className="font-bold text-sm md:text-base">Date</label>
            <input
              type="date"
              className={`${
                darkmode
                  ? "text-primary-white bg-secondinary-light-300"
                  : "text-secondinary-light-300"
              } w-full p-0 text-[10px] md:text-sm outline-none border-none focus:ring-0`}
            />
          </div>
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 p-2">
            <label className="font-bold text-sm md:text-base">Time</label>
            <input
              type="time"
              className={`${
                darkmode
                  ? "text-primary-white bg-secondinary-light-300"
                  : "text-secondinary-light-300"
              } w-full p-0 text-[10px]  md:text-sm outline-none border-none focus:ring-0`}
            />
          </div>
        </div>
      </div>
      {/* swich botton */}
      <div
        className={`${
          type === "category" && "-mr-2 -ml-2"
        } z-10 flex -mt-2 -mb-2 items-center justify-center`}
      >
        <button
          className={`${
            darkmode ? "bg-secondinary-light-400" : "bg-primary-dark-500"
          } p-1 w-8 h-8 md:w-12 md:h-12 rounded-md flex items-center text-primary-white`}
        >
          <ArrowLongDownIcon className="md:-mr-2 -mr-1" />
          <ArrowLongUpIcon className="-ml-1" />
        </button>
      </div>
      {/* drop-off */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-300" : "bg-primary-white"
        } p-2 md:p-4 flex flex-col  w-full md:flex-1 rounded-md`}
      >
        <div className="flex items-center mb-4">
          <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
          <h1 className="font-bold text-sm md:text-base">Drop - Off</h1>
        </div>
        <div className="flex items-center justify-around w-full">
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 border-r-2 p-2 border-[#C3D4E966]">
            <label className="font-bold text-sm md:text-base">Locations</label>
            <select
              className={`${
                darkmode
                  ? "text-primary-white bg-secondinary-light-300"
                  : "text-secondinary-light-300"
              } py-0 w-full text-[10px] md:text-sm outline-none border-none focus:ring-0`}
            >
              <option className="text-secondinary-Default">yourcity</option>
              <option>German</option>
              <option>USA</option>
              <option>France</option>
            </select>
          </div>
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 border-r-2 p-2 border-[#C3D4E966]">
            <label className="font-bold text-sm md:text-base">Date</label>
            <input
              type="date"
              className={`${
                darkmode
                  ? "text-primary-white bg-secondinary-light-300"
                  : "text-secondinary-light-300"
              } w-full  p-0 text-[10px] md:text-sm outline-none border-none focus:ring-0`}
            />
          </div>
          {/* dropdown */}
          <div className="flex flex-1 flex-col gap-2 p-2 ">
            <label className="font-bold text-sm md:text-base">Time</label>
            <input
              type="time"
              className={`${
                darkmode
                  ? "text-primary-white bg-secondinary-light-300"
                  : "text-secondinary-light-300"
              } w-full p-0 text-[10px]  md:text-sm outline-none border-none focus:ring-0`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
