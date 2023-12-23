
import Image from "next/image";
import Link from "next/link";
import profile from "../public/images/profile.png";
import logo from "../public/images/Logo.png";
import { HeartIcon, BellIcon, Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/solid";

const HeaderWithoutSearchbox = () => {
  return (
    <div className="sticky flex-col items-center justify-center bg-primary-white z-20 top-0 w-full p-4 shadow-md mb-5">
      <div className="w-full flex flex-row items-center gap-4 md:justify-between">
        {/* logo */}
        <div className="md:w-[200px]  flex items-center justify-start md:justify-center">
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
        {/* profile & setting */}
        <div className="flex items-center flex-1 md:w-[30%] justify-end  gap-4">
          {/* favorite */}
          <Link
            href="/favorite"
            className="w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <HeartIcon className="w-full h-full text-secondinary-light-400" />
          </Link>
          {/* message */}
          <Link
            href="/messagess"
            className="relative w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <BellIcon className="w-full h-full text-secondinary-light-400" />
            {/* badge */}
            <span className="absolute top-0 left-6 w-2 h-2 rounded-full bg-[#FF4423]"></span>
          </Link>
          {/* setting */}
          <Link
            href="/setting"
            className="w-10 hidden md:flex items-center justify-center p-2 h-10 rounded-full border border-secondinary-light-200"
          >
            <Cog6ToothIcon className="w-full h-full text-secondinary-light-400" />
          </Link>
          {/* profile */}
          <Link
            href="/dashbord"
            className="w-10 flex items-center justify-center h-10 rounded-full border border-secondinary-light-200"
          >
            <Image src={profile} className="w-full h-full" alt="profille" />
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HeaderWithoutSearchbox;
