"use client";
import Link from "next/link";
import SingleCarCart from "./SingleCarCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAysincCars } from "@/redux/features/cars/carsSlices";

const PopularCar = () => {
  const { darkmode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { loading, cars, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getAysincCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex w-full items-center justify-between p-2 mb-2">
        <h2
          className={`${darkmode ? "text-primary-white" : "text-secondinary-light-300"} text-xs `}
        >
          Popular Car
        </h2>
        <Link
          href="#"
          className={`${darkmode ? "text-primary-white" : "text-primary-dark-500"} text-xs `}
        >
          View All
        </Link>
      </div>
      <div className="w-full p-2 overflow-x-auto">
        <div className="w-[400%] md:w-[200%] lg:w-full overflow-x-auto grid grid-cols-4 gap-4 grid-rows-1 mb-4">
          {loading || cars.length === 0 ? (
            <div className="col-span-4 row-span-1 flex items-center justify-center">loading......</div>
          ) : (
            cars.popularCars.map((car) => <SingleCarCart car={car} key={car.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
