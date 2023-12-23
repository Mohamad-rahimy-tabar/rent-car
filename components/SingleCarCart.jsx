"use client";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SingleCarCart = ({ car }) => {
  const { darkmode } = useSelector((state) => state.theme);
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/category/${car.title}`);
  };
  return (
    <div
      className={`${
        darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
      } flex flex-col w-full rounded-md p-4 shadow-md`}
    >
      {/* head */}
      <div className="flex flex-col w-full cursor-pointer mb-10 md:mb-20" onClick={clickHandler}>
        <div className="flex items-center justify-between">
          <h1
            className={`${darkmode ? "text-primary-white" : "text-secondinary-Default"} font-bold`}
          >
            {car.title}
          </h1>
          <HeartIcon
            className={`${
              darkmode ? "text-primary-white fill-primary-white" : ""
            } h-7 cursor-pointer w-7`}
          />
        </div>
        <span
          className={`${
            darkmode ? "text-primary-white" : "text-secondinary-light-300"
          } text-sm font-bold`}
        >
          {car.class}
        </span>
      </div>
      {/* image & icons */}
      <div
        className="w-full flex md:flex-col cursor-pointer gap-4 items-center justify-center flex-row mb-10"
        onClick={clickHandler}
      >
        {/* image */}
        <div className="aspect-h-2 aspect-w-7 w-[60%] md:w-full md:aspect-w-8 md:aspect-h-3 md:mb-10">
          <Image
            src={car.image}
            className="w-full h-full object-center object-contain"
            priority={true}
            alt="Picture"
          />
        </div>
        {/* icons */}
        <div className="flex flex-1 md:w-full md:flex-row flex-col gap-2 items-center justify-center md:justify-evenly">
          <div className="flex items-center w-full">
            <span>
              <svg
                className="w-5 md:w-6 md:h-6 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z"
                  fill="#90A3BF"
                />
              </svg>
            </span>
            <span
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-300"
              } text-center text-xs ml-1`}
            >
              {car.gasoline}
            </span>
          </div>
          <div className="flex items-center w-full">
            <span>
              <svg
                className={`w-5 md:w-6 md:h-6 h-5`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                  className="fill-secondinary-light-300"
                />
                <rect x="4" y="4" width="16" height="16" rx="8" className={darkmode?"fill-secondinary-light-400":"fill-primary-white"} />
                <path
                  d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                  className="fill-secondinary-light-300"
                />
                <rect x="8" y="8" width="8" height="8" rx="4" className={darkmode?"fill-secondinary-light-400":"fill-primary-white"} />
                <rect x="11" y="17" width="2" height="4" className="fill-secondinary-light-300" />
                <rect x="17" y="11" width="4" height="2" className="fill-secondinary-light-300" />
                <rect x="3" y="11" width="4" height="2" className="fill-secondinary-light-300" />
              </svg>
            </span>
            <span
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-300"
              } text-center text-xs ml-1`}
            >
              {car.gear}
            </span>
          </div>
          <div className="flex items-center w-full">
            <span>
              <svg
                className="w-5 md:w-6 md:h-6 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                  fill="#90A3BF"
                />
                <path
                  d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
                  fill="#90A3BF"
                />
                <path
                  d="M19.9901 7.34001C20.1501 9.28001 18.7701 10.98 16.8601 11.21C16.8501 11.21 16.8501 11.21 16.8401 11.21H16.8101C16.7501 11.21 16.6901 11.21 16.6401 11.23C15.6701 11.28 14.7801 10.97 14.1101 10.4C15.1401 9.48001 15.7301 8.10001 15.6101 6.60001C15.5401 5.79001 15.2601 5.05001 14.8401 4.42001C15.2201 4.23001 15.6601 4.11001 16.1101 4.07001C18.0701 3.90001 19.8201 5.36001 19.9901 7.34001Z"
                  fill="#90A3BF"
                />
                <path
                  d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z"
                  fill="#90A3BF"
                />
              </svg>
            </span>
            <span
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-light-300"
              } text-center text-xs ml-1`}
            >
              {car.capacity}
            </span>
          </div>
        </div>
      </div>
      {/* cta */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span
              className={`${
                darkmode ? "text-primary-white" : "text-secondinary-Default"
              } text-base md:text-lg font-bold`}
            >
              ${car.price}/
            </span>
            <span className="text-secondinary-light-300 text-xs md:text-sm">day</span>
          </div>
          <span
            className={`${
              !car.price_befor_discount && "hidden"
            } line-through text-secondinary-light-300 text-xs md:text-sm`}
          >
            ${car.price_befor_discount}
          </span>
        </div>
        <button
          className={`${
            darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
          } drop-shadow-lg shadow-md text-sm md:text-base text-primary-white rounded-md py-2 px-4`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default SingleCarCart;
