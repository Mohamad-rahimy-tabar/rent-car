"use client";
import Image from "next/image";
import car from "../public/images/car.png";
import car2 from "../public/images/car2.png";
import { useSelector } from "react-redux";
const Ads = () => {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div className="w-full p-2 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mb-4">
      {/* ad1 */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-400" : "bg-information-dark-500"
        }  p-4 text-primary-white flex flex-col gap-2 rounded-md items-center`}
      >
        <div className="w-full">
          {/* title */}
          <div className="flex flex-col w-[50%] tracking-tight mb-4">
            <h1 className="md:text-2xl mb-2">The Best Platform for Car Rental</h1>
            <h2 className="text-xs md:text-sm">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </h2>
          </div>
          {/* button */}
          <button className={`${darkmode?"bg-secondinary-light-300":"bg-primary-dark-500"} text-sm md:text-base rounded-sm py-2 px-4`}>
            Rental Car
          </button>
        </div>
        {/* image */}
        <div className="aspect-w-6 aspect-h-1 w-[60%]">
          <Image
            src={car}
            className="w-full h-full object-contain object-center"
            priority={true}
            alt="Picture"
          />
        </div>
      </div>
      {/* ad2 */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-400" : "bg-primary-dark-500"
        }  p-4 text-primary-white md:flex hidden rounded-md flex-col items-center`}
      >
        <div className="w-full">
          {/* title */}
          <div className="flex flex-col w-[50%] tracking-tight mb-4">
            <h1 className="text-2xl mb-2">Easy way to rent a car at a low price</h1>
            <h2 className="text-sm">
              Providing cheap car rental services and safe and comfortable facilities.
            </h2>
          </div>
          {/* button */}
          <button className={`${darkmode?"bg-secondinary-light-300":"bg-information-dark-500"} rounded-sm py-2 px-4`}>Rental Car</button>
        </div>
        {/* image */}
        <div className="aspect-w-6 aspect-h-1 w-[60%]">
          <Image
            src={car2}
            className="w-full h-full object-contain object-center"
            priority={true}
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
