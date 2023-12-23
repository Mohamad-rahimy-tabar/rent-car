"use client";
import Link from "next/link";
import SingleCarCart from "./SingleCarCart";
import { useDispatch, useSelector } from "react-redux";

const RecomendationCar = () => {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state.theme);
  const { loading, cars, error } = useSelector((state) => state.cars);

  return (
    <div className="w-full flex-col items-center justify-center mb-5">
      <div className="flex w-full items-center justify-between mb-2 p-2">
        <h2
          className={`${darkmode ? "text-primary-white" : "text-secondinary-light-300"} text-xs `}
        >
          Recomendation Car
        </h2>
        <Link
          href="#"
          className={`${darkmode ? "text-primary-white" : "text-primary-dark-500"} text-xs `}
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 p-2 grid-rows-[8] md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 mb-10">
        {loading || cars.length === 0 ? (
          <div className="col-span-4 row-span-2 flex items-center justify-center">loading.....</div>
        ) : (
          cars.recomendationCars.map((car) => <SingleCarCart car={car} key={car.id} />)
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          className={`${
            darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
          }  text-sm md:text-base text-primary-white rounded-md px-4 py-2`}
        >
          Show more car
        </button>
        <span
          className={`${
            darkmode ? "text-primary-white" : "text-secondinary-light-300"
          } tex text-xs md:text-sm ml-5 text-center`}
        >
          120 Car
        </span>
      </div>
    </div>
  );
};

export default RecomendationCar;
