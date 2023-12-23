"use client";
import Image from "next/image";
import maps from "../../../../public/images/Maps.png";
import car from "../../../../public/images/car2.png";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";

// setting for used chart

export default function Profile() {
  const { darkmode } = useSelector((state) => state.theme);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      show: false,
    },
    color: ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
    series: [
      {
        name: "",
        type: "pie",
        radius: ["100%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: darkmode ? "#596780" : "#fff",
          borderWidth: 10,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 17439, name: "Sport car" },
          { value: 9478, name: "SUV" },
          { value: 18197, name: "Coupe" },
          { value: 12510, name: "Hatchback" },
          { value: 14406, name: "MPV" },
        ],
      },
    ],
  };

  return (
    <section className="flex flex-col md:flex-row w-full h-full gap-4">
      {/* detail rental */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
        } flex-1 rounded-md flex p-4 gap-4 flex-col`}
      >
        {/* header */}
        <div className="w-full">
          <h1
            className={`${
              darkmode ? "text-dark-text" : "text-secondinary-Default"
            } text-lg font-bold`}
          >
            Details Rental
          </h1>
        </div>
        {/* image */}
        <div className="w-full">
          <div>
            <Image src={maps} className="w-full h-full" alt="map" />
          </div>
        </div>
        {/* car detail */}
        <div className="w-full flex items-stretch gap-4">
          {/* car image */}
          <div
            className={`${
              darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
            } rounded-md px-2 py-4 w-1/3 flex items-center justify-center`}
          >
            <div className="aspect-w-6 aspect-h-2 w-full">
              <Image src={car} className="w-full h-full object-cover object-center" alt="car" />
            </div>
          </div>
          {/* car detail */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <h1
                className={`${
                  darkmode ? "text-primary-white" : "text-secondinary-Default"
                } md:text-2xl text-xl font-bold `}
              >
                Nissan GT - R
              </h1>
              <span
                className={`${
                  darkmode ? "text-primary-white" : "text-[#3D5278]"
                } hidden md:block text-sm `}
              >
                #9761
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`${
                  darkmode ? "text-primary-white" : "text-[#3D5278]"
                } font-bold text-sm`}
              >
                Sport Car
              </span>
              <span
                className={`${
                  darkmode ? "text-primary-white" : "text-[#3D5278]"
                } md:hidden text-sm`}
              >
                #9761
              </span>
            </div>
          </div>
        </div>
        {/* pick up & drop off desktop*/}
        <div className="w-full hidden md:flex flex-col gap-1">
          {/* pick up */}
          <div
            className={`${
              darkmode ? "bg-secondinary-light-300" : "bg-primary-white"
            } md:p-4 p-2 flex flex-col  w-full md:flex-1 rounded-md`}
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
                      ? "text-primary-white bg-secondinary-light-300"
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
                  } w-full  p-0 text-[10px] md:text-sm outline-none border-none focus:ring-0`}
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
          {/* drop off */}
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
                  } w-full p-0 text-[10px] md:text-sm outline-none border-none focus:ring-0`}
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
        {/* pick up & drop off mobile */}
        <div className="md:hidden flex flex-col w-full p-2 gap-5">
          {/* pick up */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
              <h1 className="font-bold text-sm md:text-base">Pick - Up</h1>
            </div>
            {/* form */}
            <form className="w-full">
              <div className="flex flex-col gap-5">
                {/* first line */}
                <div className="flex w-full flex-col gap-4 md:flex-row">
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Locations
                    </label>
                    <select className="text-secondinary-light-300 border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9]">
                      <option className="">Select Your City</option>
                      <option className="p-2">German</option>
                      <option className="p-2">USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Date
                    </label>
                    <input
                      type="date"
                      className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                {/* second line */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Time
                    </label>
                    <input
                      type="time"
                      className="border-none outline-none text-xs md:text-sm py-2 px-4 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* drop off */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
              <h1 className="font-bold text-sm md:text-base">Drop - Off</h1>
            </div>
            {/* form */}
            <form className="">
              <div className="flex flex-col gap-5">
                {/* first line */}
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Locations
                    </label>
                    <select className="text-secondinary-light-300 border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9]">
                      <option className="">Select Your City</option>
                      <option className="p-2">German</option>
                      <option className="p-2">USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Date
                    </label>
                    <input
                      type="date"
                      className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                {/* second line */}
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div className="flex flex-col gap-4 flex-1">
                    <label className="text-secondinary-Default text-sm md:text-base font-bold">
                      Time
                    </label>
                    <input
                      type="time"
                      className="border-none outline-none text-xs py-2 px-4 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                      placeholder="Address"
                    />
                  </div>
                  <div className="hidden md:flex flex-col gap-2 md:gap-4 flex-1"></div>
                </div>
              </div>
              <div></div>
            </form>
          </div>
        </div>
        {/* horizental line */}
        <hr
          className={`${
            darkmode ? "bg-primary-white" : "bg-[#C3D4E966]"
          } outline-none border-none w-full h-[2px]`}
        ></hr>
        {/* total rental */}
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col">
            <span className={`${darkmode?"text-primary-white":"text-secondinary-Default"} font-bold text-base md:text-xl`}>
              Total Rental Price
            </span>
            <span className={`${darkmode?"text-primary-white":"text-secondinary-light-300"} text-xs md:text-sm`}>
              Overall price and includes rental discount
            </span>
          </div>
          <div>
            <span className={`${darkmode?"text-primary-white":"text-secondinary-Default"} font-bold text-xl md:text-3xl`}>$80.00</span>
          </div>
        </div>
      </div>
      {/* top car & recent transaction */}
      <div className="flex-1 flex flex-col gap-8">
        {/* top car */}
        <div
          className={`${
            darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
          } flex-1  rounded-md flex gap-2 flex-col`}
        >
          {/* header */}
          <div className="flex items-center justify-between p-4">
            <div className="">
              <span
                className={`${
                  darkmode ? "text-primary-white" : "text-secondinary-Default"
                } text-lg font-bold`}
              >
                Top 5 Car Rental
              </span>
            </div>
            <div className={`${darkmode ? "text-primary-white" : ""}`}>
              <EllipsisHorizontalIcon className="w-7 h-7" />
            </div>
          </div>
          {/* chart & lebale*/}
          <div className="flex flex-col gap-4 md:flex-row px-4">
            <div className="flex-1 relative">
              <ReactECharts option={option} />
              <div className="absolute h-[30%] w-[50%] top-[35%] left-[25%] flex flex-col items-center justify-center">
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  }  font-bold text-2xl`}
                >
                  72,030
                </span>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-light-300"
                  } text-base`}
                >
                  Rental Car
                </span>
              </div>
            </div>
            {/* labels */}
            <div className="flex-1 flex flex-col gap-2 md:gap-0 p-2 justify-evenly">
              {/* single label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-[#0D3559] w-3 h-3 rounded-full mr-2"></span>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } text-sm`}
                  >
                    Sportcar
                  </span>
                </div>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  } font-bold text-sm`}
                >
                  17,439
                </span>
              </div>
              {/* single label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-[#175D9C] w-3 h-3 rounded-full mr-2"></span>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } text-sm`}
                  >
                    SUV
                  </span>
                </div>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  } font-bold text-sm`}
                >
                  9,478
                </span>
              </div>
              {/* single label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-[#2185DE] w-3 h-3 rounded-full mr-2"></span>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } text-sm`}
                  >
                    Coupe
                  </span>
                </div>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  } font-bold text-sm`}
                >
                  18,197
                </span>
              </div>
              {/* single label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-[#63A9E8] w-3 h-3 rounded-full mr-2"></span>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } text-sm`}
                  >
                    Hatchback
                  </span>
                </div>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  } font-bold text-sm`}
                >
                  12,510
                </span>
              </div>
              {/* single label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-[#A6CEF2] w-3 h-3 rounded-full mr-2"></span>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } text-sm`}
                  >
                    MPV
                  </span>
                </div>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-Default"
                  } font-bold text-sm`}
                >
                  14,406
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* recent transaction */}
        <div
          className={`${
            darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
          } flex-1 flex flex-col gap-4 rounded-md p-4`}
        >
          <div className="flex items-center justify-between">
            <h1
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-Default"
              } font-bold  text-base md:text-xl`}
            >
              Recent Transaction
            </h1>
            <span
              className={`${
                darkmode ? "text-primary-white" : "text-primary-dark-500"
              }  text-xs md:text-sm`}
            >
              View All
            </span>
          </div>
          <div className="w-full grid grid-cols-1 grid-rows-4 gap-2 flex-1">
            {/* single cart */}
            <div
              className={`${
                darkmode ? "bg-secondinary-light-300" : "border-[#C3D4E966]"
              } w-full shadow-md border-b rounded-md flex gap-4 items-center p-2`}
            >
              {/* image */}
              <div className="w-1/4">
                <div className="w-full aspect-w-7 aspect-h-2">
                  <Image src={car} className="w-full h-full object-center object-cover" alt="car" />
                </div>
              </div>
              {/* detail */}
              <div className="flex-1 flex md:gap-2 flex-col">
                <div className="flex items-center justify-between">
                  <h2
                    className={`${
                      darkmode ? "text-primary-white" : ""
                    } font-bold text-sm md:text-base`}
                  >
                    Nissan GT - R
                  </h2>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } font-medium text-xs md:text-sm`}
                  >
                    20 July
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    }  font-medium text-xs md:text-sm`}
                  >
                    Sport Car
                  </h3>
                  <span className={`${darkmode ? "text-primary-white" : ""} font-bold text-base`}>
                    $80.00
                  </span>
                </div>
              </div>
            </div>
            {/* single cart */}
            <div
              className={`${
                darkmode ? "bg-secondinary-light-300" : "border-[#C3D4E966]"
              } w-full shadow-md border-b rounded-md flex gap-4 items-center p-2`}
            >
              {/* image */}
              <div className="w-1/4">
                <div className="w-full aspect-w-7 aspect-h-2">
                  <Image src={car} className="w-full h-full object-center object-cover" alt="car" />
                </div>
              </div>
              {/* detail */}
              <div className="flex-1 flex md:gap-2 flex-col">
                <div className="flex items-center justify-between">
                  <h2
                    className={`${
                      darkmode ? "text-primary-white" : ""
                    } font-bold text-sm md:text-base`}
                  >
                    Nissan GT - R
                  </h2>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } font-medium text-xs md:text-sm`}
                  >
                    20 July
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    }  font-medium text-xs md:text-sm`}
                  >
                    Sport Car
                  </h3>
                  <span className={`${darkmode ? "text-primary-white" : ""} font-bold text-base`}>
                    $80.00
                  </span>
                </div>
              </div>
            </div>
            {/* single cart */}
            <div
              className={`${
                darkmode ? "bg-secondinary-light-300" : "border-[#C3D4E966]"
              } w-full shadow-md border-b rounded-md flex gap-4 items-center p-2`}
            >
              {/* image */}
              <div className="w-1/4">
                <div className="w-full aspect-w-7 aspect-h-2">
                  <Image src={car} className="w-full h-full object-center object-cover" alt="car" />
                </div>
              </div>
              {/* detail */}
              <div className="flex-1 flex md:gap-2 flex-col">
                <div className="flex items-center justify-between">
                  <h2
                    className={`${
                      darkmode ? "text-primary-white" : ""
                    } font-bold text-sm md:text-base`}
                  >
                    Nissan GT - R
                  </h2>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } font-medium text-xs md:text-sm`}
                  >
                    20 July
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    }  font-medium text-xs md:text-sm`}
                  >
                    Sport Car
                  </h3>
                  <span className={`${darkmode ? "text-primary-white" : ""} font-bold text-base`}>
                    $80.00
                  </span>
                </div>
              </div>
            </div>
            {/* single cart */}
            <div
              className={`${
                darkmode ? "bg-secondinary-light-300" : "border-[#C3D4E966]"
              } w-full shadow-md border-b rounded-md flex gap-4 items-center p-2`}
            >
              {/* image */}
              <div className="w-1/4">
                <div className="w-full aspect-w-7 aspect-h-2">
                  <Image src={car} className="w-full h-full object-center object-cover" alt="car" />
                </div>
              </div>
              {/* detail */}
              <div className="flex-1 flex md:gap-2 flex-col">
                <div className="flex items-center justify-between">
                  <h2
                    className={`${
                      darkmode ? "text-primary-white" : ""
                    } font-bold text-sm md:text-base`}
                  >
                    Nissan GT - R
                  </h2>
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    } font-medium text-xs md:text-sm`}
                  >
                    20 July
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-light-300"
                    }  font-medium text-xs md:text-sm`}
                  >
                    Sport Car
                  </h3>
                  <span className={`${darkmode ? "text-primary-white" : ""} font-bold text-base`}>
                    $80.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
