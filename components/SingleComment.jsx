"use client";
import Image from "next/image";
import generateRateStars from "../utils/generateRateStars";
import { useSelector } from "react-redux";

const SingleComment = ({ comment }) => {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div className="w-full flex gap-8 items-start">
      {/* profile image */}
      <div>
        <Image src={comment.image_src} alt="profile" />
      </div>
      {/* discribe */}
      <div className="flex-1 flex flex-col gap-1">
        {/* name */}
        <div className="flex items-center justify-between">
          <h1 className={`${darkmode?"text-hyu ":"text-secondinary-Default"} font-bold text-sm md:text-lg`}>{comment.name}</h1>
          <span className={`${darkmode?"text-primary-white":"text-secondinary-light-300"} text-xs md:text-sm`}>{comment.date}</span>
        </div>
        {/* rating */}
        <div className="flex items-center justify-between">
          <h2 className={`${darkmode?"text-secondinary-light-200":"text-secondinary-light-300"} text-xs md:text-sm`}>{comment.job}</h2>
          <div className="flex items-center text-secondinary-light-400">
            {generateRateStars(comment.rate)}
          </div>
        </div>
        {/* message */}
        <div>
          <span className={`${darkmode?"text-primary-white":"text-secondinary-light-400"} text-xs md:text-sm`}>{comment.message}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
