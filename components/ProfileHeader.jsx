"use client";
import Image from "next/image";
import Link from "next/link";
import profile from "../public/images/profile.png";
import logo from "../public/images/Logo.png";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { HeartIcon, BellIcon, Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import { useSelector } from "react-redux";
const ProfileHeader = () => {
  const [isOpenMenu, toggle] = useState(false);
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div
      className={`${
        darkmode ? "bg-secondinary-Default" : "bg-primary-white"
      } sticky flex-col items-center justify-center z-20 top-0 w-full p-4 shadow-md mb-5`}
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-4 md:justify-between">
        {/*show in mobile screen */}
        <div className="md:hidden mt-4 flex items-center justify-between w-full">
          <div className="w-[80%] px-2 bg-primary-white rounded-md border-2 border-secondinary-light-200 flex items-center justify-center">
            <MagnifyingGlassIcon className="h-4 w-4 text-secondinary-light-400" />
            <input
              type="text"
              className="border-none text-xs flex-1 outline-none ring-0 focus:ring-0 bg-primary-white placeholder:text-xs placeholder:text-secondinary-light-400"
              placeholder="Search something here"
            ></input>
          </div>
          <span className="border-2 border-secondinary-light-200 rounded-md p-2 flex items-center justify-center">
            <AdjustmentsHorizontalIcon
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-400"
              } w-4 h-4`}
            />
          </span>
        </div>
        {/* logo */}
        <div className="md:w-[200px] w-full flex items-center justify-start md:justify-center">
          <div className="md:aspect-w-18 md:aspect-h-2 aspect-w-17 aspect-h-1 w-[90px] md:w-[120px]">
            <Link href="/">
              <Image
                src={logo}
                className="w-full h-full object-cover object-center"
                priority={true}
                alt="Picture"
              />
            </Link>
          </div>
        </div>
        {/* search box */}
        <div className="flex-1 px-3 rounded-full border-2 bg-primary-white border-secondinary-light-200 hidden md:flex items-center justify-center">
          <MagnifyingGlassIcon className="w-7 h-7 text-secondinary-light-400" />
          <input
            type="text"
            className="border-none flex-1 outline-none ring-0 focus:ring-0 bg-primary-white placeholder:text-sm placeholder:text-secondinary-light-400"
            placeholder="Search something here"
          ></input>
          <Link href="/category" className="text-secondinary-light-400">
            <AdjustmentsHorizontalIcon className="w-7 h-7" />
          </Link>
        </div>
        {/* profile & setting */}
        <div className="flex items-center w-full md:w-[30%] justify-between md:justify-center gap-4">
          {/* habmerger menu */}
          <div onClick={() => toggle(!isOpenMenu)} className="cursor-pointer">
            <Bars3Icon className={`${darkmode && "text-primary-white"} w-7 h-7 md:hidden`} />
          </div>
          {/* favorite */}
          <Link
            href="/favorite"
            className="w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <HeartIcon
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-400"
              } w-full h-full`}
            />
          </Link>
          {/* message */}
          <Link
            href="/messagess"
            className="relative w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <BellIcon
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-400"
              } w-full h-full`}
            />
            {/* badge */}
            <span className="absolute top-0 left-6 w-2 h-2 rounded-full bg-[#FF4423]"></span>
          </Link>
          {/* setting */}
          <Link
            href="/setting"
            className="w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <Cog6ToothIcon
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-400"
              } w-full h-full`}
            />
          </Link>
          {/* profile */}
          <Link
            href="/dashbord"
            className={`${
              darkmode ? "border-primary-white" : "border-secondinary-light-400"
            } w-10 flex items-center justify-center h-10 rounded-full border`}
          >
            <Image src={profile} className="w-full h-full" alt="profille" />
          </Link>
        </div>
      </div>
      <div
        className={`${
          isOpenMenu ? "translate-x-[100%]" : "-translate-x-[100%]"
        } fixed top-24 bottom-1 right-[100%] w-[90%] md:hidden border ${darkmode?"bg-secondinary-Default border-primary-white":"border-primary-dark-500 bg-primary-white"}  px-4 py-2 transition-all  shadow-md rounded-md duration-700`}
      >
        <div className="w-full h-full overflow-auto">
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
