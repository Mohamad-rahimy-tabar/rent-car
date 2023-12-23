"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/Logo.png";
import { useSelector } from "react-redux";
const Footer = () => {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div
      className={`${
        darkmode ? "bg-secondinary-Default" : "bg-primary-white"
      } w-full drop-shadow-md p-10 max-w-screen-2xl mx-auto  flex flex-col`}
    >
      {/* logo and links */}
      <div className={`${darkmode?"border-b-primary-white":"border-b-[#13131329]"} border-b-[1px] flex md:flex-row flex-col gap-4 items-start p-4 mb-4`}>
        {/* logo */}
        <div className="flex flex-col gap-5 w-full md:w-[20%]">
          <div className="aspect-h-1 aspect-w-8 w-[50%]">
            <Image src={logo} className="w-full h-full" priority={true} alt="Picture" />
          </div>
          <h2
            className={`${
              darkmode ? "text-primary-white" : "text-[#13131399]"
            } md:text-base text-xs`}
          >
            Our vision is to provide convenience and help increase your sales business.
          </h2>
        </div>
        {/* about & community & socials */}
        <div
          className={`${
            darkmode && "text-primary-white"
          } flex p-2 gap-10 flex-1 justify-end text-sm md:text-base`}
        >
          {/* about & community */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* about */}
            <div className="flex flex-col">
              <h1 className="font-bold mb-4">About</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Featured
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    BussinessRelation
                  </Link>
                </li>
              </ul>
            </div>
            {/* community */}
            <div className="flex flex-col">
              <h1 className="font-bold mb-4">Community</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Events{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                  >
                    Invite a friend
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Socials */}
          <div className="flex flex-col">
            <h1 className="font-bold mb-4">Socials</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${darkmode?"text-primary-white hover:text-secondinary-light-300":"text-[#13131399] hover:text-primary-dark-500"} transition-all duration-300`}
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* terms */}
      <div className="flex md:flex-row w-full flex-col-reverse gap-4 md:items-center justify-between">
        <div>
          <span className={`${darkmode?"text-primary-white":"text-secondinary-Default"}  text-xs font-bold`}>
            ©2022 MORENT. All rights reserved
          </span>
        </div>
        <div className="flex items-center md:justify-center justify-between gap-4 ">
          <Link href="#" className={`${darkmode?"text-primary-white":"text-secondinary-Default"} text-xs font-bold`}>
            Privacy & Policy
          </Link>
          <Link href="#" className={`${darkmode?"text-primary-white":"text-secondinary-Default"} text-xs font-bold`}>
            Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
