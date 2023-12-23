"use client";
import Filter from "../../../../../components/Filter";
import { recomendationCars } from "../../../../../data/recomendationCars";
import SingleCarCart from "../../../../../components/SingleCarCart";
import { useSelector } from "react-redux";

export default function Category() {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <section className="w-full">
      <Filter type="category" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10">
        {recomendationCars.slice(0, 6).map((car) => (
          <SingleCarCart car={car} key={car.id} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mb-10">
        <button
          className={`${
            darkmode ? "bg-secondinary-light-300" : "bg-primary-dark-500"
          } text-sm md:text-base text-primary-white rounded-md px-4 py-2`}
        >
          Show more car
        </button>
        <span className={`${darkmode?"text-primary-white":"text-secondinary-light-300"} tex text-xs md:text-sm ml-5 text-center`}>
          120 Car
        </span>
      </div>
    </section>
  );
}
