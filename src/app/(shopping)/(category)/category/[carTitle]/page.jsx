"use client";
import Image from "next/image";
import view2 from "../../../../../../public/images/View 2.png";
import view3 from "../../../../../../public/images/View 3.png";
import { HeartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import SingleCarCart from "../../../../../../components/SingleCarCart";
import { recomendationCars } from "../../../../../../data/recomendationCars";
import Link from "next/link";
import { allComments } from "../../../../../../data/comments";
import SingleComment from "../../../../../../components/SingleComment";
import generateRateStars from "../../../../../../utils/generateRateStars";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAysincSingleCar } from "@/redux/features/cars/carsSlices";

export default function DetailCarPage({ params }) {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state.theme);
  const { singleCar, loading, error } = useSelector((state) => state.cars);
  const carTittle = params.carTitle;

  useEffect(() => {
    dispatch(getAysincSingleCar({ tittle: carTittle }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!singleCar.length === 0) return <div>loading.....</div>;
  return (
    <section className="w-full p-2">
      <div className="flex gap-4 flex-col md:flex-row mb-10 w-full">
        {/* images */}
        <div className="flex flex-col">
          {/* main image */}
          <div
            className={`${
              darkmode ? "bg-secondinary-light-400" : "bg-primary-dark-500"
            } mb-2 flex gap-4 flex-col rounded-md text-primary-white p-4`}
          >
            <div className="w-[60%] flex flex-col gap-2">
              <h1 className="md:text-2xl mb-2">Sports car with the best design and acceleration</h1>
              <h2 className="text-xs md:text-sm">
                Safety and comfort while driving a futuristic and elegant sports car
              </h2>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[70%] aspect-w-4 aspect-h-1">
                <Image
                  src={singleCar.image}
                  className="w-full h-full object-contain object-center"
                  priority={true}
                  alt="car"
                />
              </div>
            </div>
          </div>
          {/* detail images */}
          <div className="flex items-stretch gap-2 w-full">
            <div className="cursor-pointer overflow-hidden rounded-md w-1/3">
              <div
                className={`${
                  darkmode ? "bg-secondinary-light-400" : "bg-primary-dark-500"
                } aspect-h-3 aspect-w-3`}
              >
                <Image
                  src={singleCar.image}
                  className="h-full w-full object-center object-contain"
                  priority={true}
                  alt="view"
                />
              </div>
            </div>
            <div className="cursor-pointer rounded-md w-1/3">
              <Image src={view2} className="w-full h-full" alt="view" />
            </div>
            <div className="cursor-pointer rounded-md w-1/3">
              <Image src={view3} className="w-full h-full" alt="view" />
            </div>
          </div>
        </div>
        {/* car detail */}
        <div
          className={`${
            darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
          } md:w-1/2 w-full  rounded-md p-4 shadow-md text-2xl`}
        >
          {/* car name */}
          <div className="w-full mb-5">
            <div className="flex items-center justify-between">
              <h1
                className={`${
                  darkmode ? "text-primary-white" : "text-secondinary-Default"
                } text-base md:text-2xl font-bold`}
              >
                {singleCar.title}
              </h1>
              <HeartIcon
                className={`${
                  darkmode && "fill-primary-white stroke-primary-white"
                } md:h-7 h-5 w-5 cursor-pointer md:w-7`}
              />
            </div>
            {/* review */}
            <div className="flex items-center w-full">
              {/* rating */}
              <div className="flex items-center text-secondinary-light-400 mr-2">
                {generateRateStars(3)}
              </div>
              <h2 className="text-secondinary-light-400 font-bold text-sm">440+ Reviewer</h2>
            </div>
          </div>
          {/* detail */}
          <div
            className={`${
              darkmode ? "text-primary-white" : "text-secondinary-light-400"
            } text-sm md:text-lg mb-10`}
          >
            <p>
              NISMO has become the embodiment of Nissans outstanding performance, inspired by the
              most unforgiving proving ground, the race track.
            </p>
          </div>
          {/* feuthers */}
          <div className="w-full flex flex-col gap-4 mb-10">
            {/* type car & capacity */}
            <div className="flex w-full gap-10">
              {/* type car */}
              <div className="flex items-center justify-between w-1/2">
                <span className="text-secondinary-light-300 text-sm md:text-lg">Type Car</span>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-light-400"
                  } text-sm md:text-lg`}
                >
                  {singleCar.class}
                </span>
              </div>
              {/* capacity */}
              <div className="flex items-center justify-between w-1/2">
                <span className="text-secondinary-light-300 text-sm md:text-lg">Capacity</span>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-light-400"
                  } text-sm md:text-lg`}
                >
                  {singleCar.capacity}
                </span>
              </div>
            </div>
            {/* steering & gasoline */}
            <div className="w-full flex gap-10">
              {/* steering */}
              <div className="flex items-center justify-between w-1/2">
                <span className="text-secondinary-light-300 text-sm md:text-lg">Steering</span>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-light-400"
                  } text-sm md:text-lg`}
                >
                  {singleCar.gear}
                </span>
              </div>
              {/* gasoline */}
              <div className="flex items-center justify-between w-1/2">
                <span className="text-secondinary-light-300 text-sm md:text-lg">Gasoline</span>
                <span
                  className={`${
                    darkmode ? "text-primary-white" : "text-secondinary-light-400"
                  } text-sm md:text-lg`}
                >
                  {singleCar.gasoline}
                </span>
              </div>
            </div>
          </div>
          {/* price & cta */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span
                    className={`${
                      darkmode ? "text-primary-white" : "text-secondinary-Default"
                    } text-base md:text-xl font-bold`}
                  >
                    {`$${singleCar.price}/`}
                  </span>
                  <span className="text-secondinary-light-300 text-xs md:text-sm">day</span>
                </div>
                <span className="line-through text-secondinary-light-300 text-xs md:text-base">
                  {singleCar.price_befor_discount && `$${(singleCar.price_befor_discount)}`}
                </span>
              </div>
            </div>
            <button
              className={`${
                darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
              } shadow-md text-primary-white font-bold text-sm md:text-lg rounded-md py-2 px-4 md:py-4 md:px-6`}
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
      {/* comments */}
      <div
        className={`${
          darkmode ? "bg-secondinary-light-400" : "bg-primary-white"
        } w-full p-4 flex gap-5 flex-col rounded-md mb-5 shadow-md`}
      >
        {/* header */}
        <div className="flex items-center">
          <h1
            className={`${
              darkmode ? "text-primary-white" : "text-secondinary-Default"
            } text-base md:text-lg font-bold`}
          >
            Reviews
          </h1>
          <span
            className={`${
              darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
            } ml-4  text-base md:text-lg rounded-md px-2 py-1 md:px-4 text-primary-white`}
          >
            13
          </span>
        </div>
        {/* comments container */}
        <div className="flex flex-col gap-6 w-full">
          {allComments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
        </div>
        {/* show all btn */}
        <div className="w-full flex items-center justify-center">
          <button className="flex items-center p-2 gap-2 text-secondinary-light-300">
            <span className="">Show All</span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* recent car */}
      <div className="w-full flex-col items-center justify-center mb-5">
        <div className="flex w-full items-center justify-between mb-2 p-2">
          <h2
            className={`${darkmode ? "text-primary-white" : "text-secondinary-light-300"} text-xs `}
          >
            Recent Car
          </h2>
          <Link
            href="#"
            className={`${darkmode ? "text-primary-white" : "text-primary-dark-500"} text-xs`}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {recomendationCars.slice(0, 6).map((car) => (
            <SingleCarCart car={car} key={car.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
