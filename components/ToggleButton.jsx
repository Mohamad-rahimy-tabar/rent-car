"use client";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToggleButton = () => {
  const { darkmode } = useSelector((state) => state.theme);
  const [isChecked, setIsChecked] = useState(darkmode);
  const dispath = useDispatch();

  // checkbox handler
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispath(toggleTheme());
  };

  return (
    <>
      <label
        className={`${
          darkmode ? "bg-dark-bg" : "bg-[#F6F7F9]"
        } rounded-r-full rounded-l-full relative inline-flex cursor-pointer select-none items-center`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="shadow-card flex h-[40px] w-[75px] md:h-[46px] md:w-[82px] items-center justify-center rounded-md bg-white">
          <span
            className={`flex h-8 w-8 md:h-9 md:w-9 items-center transition-all duration-500 rounded-full justify-center ${
              !isChecked ? "bg-primary-dark-500 text-primary-white" : "text-secondinary-light-300"
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00033 12.3336C10.3936 12.3336 12.3337 10.3935 12.3337 8.00026C12.3337 5.60703 10.3936 3.66693 8.00033 3.66693C5.60709 3.66693 3.66699 5.60703 3.66699 8.00026C3.66699 10.3935 5.60709 12.3336 8.00033 12.3336Z"
                fill="none"
              />
              <path
                d="M12.7597 12.7598L12.673 12.6731M12.673 3.32646L12.7597 3.2398L12.673 3.32646ZM3.23967 12.7598L3.32634 12.6731L3.23967 12.7598ZM7.99967 1.38646V1.33313V1.38646ZM7.99967 14.6665V14.6131V14.6665ZM1.38634 7.9998H1.33301H1.38634ZM14.6663 7.9998H14.613H14.6663ZM3.32634 3.32646L3.23967 3.2398L3.32634 3.32646Z"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.87"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={`flex h-8 w-8 md:h-9 md:w-9 items-center transition-all duration-500 justify-center rounded-full ${
              isChecked ? "bg-primary-white text-dark-bg" : "text-secondinary-light-300"
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693C7.44055 3.16737 7.16651 4.11662 7.23776 5.07203C7.30901 6.02744 7.72081 6.92554 8.39826 7.60299C9.07571 8.28044 9.97381 8.69224 10.9292 8.76349C11.8846 8.83473 12.8339 8.5607 13.6043 7.99122C13.8156 7.83502 14.099 7.81753 14.3279 7.94655C14.5568 8.07556 14.6886 8.32702 14.6644 8.58868C14.5479 9.84957 14.0747 11.0512 13.3002 12.053C12.5256 13.0547 11.4818 13.8152 10.2909 14.2454C9.09992 14.6756 7.81108 14.7577 6.57516 14.4821C5.33925 14.2065 4.20738 13.5846 3.312 12.6892C2.41661 11.7939 1.79475 10.662 1.51917 9.42608C1.24359 8.19017 1.32569 6.90133 1.75588 5.71038C2.18606 4.51942 2.94652 3.47561 3.94828 2.70109C4.95005 1.92656 6.15168 1.45335 7.41257 1.33682C7.67423 1.31264 7.92568 1.44442 8.0547 1.67334ZM6.21151 2.96004C5.6931 3.1476 5.20432 3.41535 4.76384 3.75591C3.96242 4.37553 3.35405 5.21058 3.00991 6.16334C2.66576 7.11611 2.60008 8.14718 2.82054 9.13591C3.04101 10.1246 3.5385 11.0301 4.25481 11.7464C4.97111 12.4627 5.87661 12.9602 6.86534 13.1807C7.85407 13.4012 8.88514 13.3355 9.8379 12.9913C10.7907 12.6472 11.6257 12.0388 12.2453 11.2374C12.5859 10.7969 12.8536 10.3081 13.0412 9.78974C12.3391 10.0437 11.586 10.1495 10.8301 10.0931C9.55619 9.99813 8.35872 9.44907 7.45545 8.5458C6.55218 7.64253 6.00312 6.44506 5.90812 5.17118C5.85174 4.4152 5.9575 3.66212 6.21151 2.96004Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </label>
    </>
  );
};

export default ToggleButton;
