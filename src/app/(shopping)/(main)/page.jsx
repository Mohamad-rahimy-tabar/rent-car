"use client";
import Filter from "../../../../components/Filter";
import Ads from "../../../../components/Ads";
import PopularCar from "../../../../components/PopularCar";
import RecomendationCar from "../../../../components/RecomendationCar";


export default function Home() {
  return (
    <>
      {/* ads */}
      <Ads />
      {/* pick-up & drop-off */}
      <Filter />
      {/* catolog */}
      <div className="flex flex-col w-full">
        {/* popular car */}
        <PopularCar />
        {/* Recomendation car */}
        <RecomendationCar />
      </div>
    </>
  );
}
