import { StarIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function generateRateStars(rate) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const className =
      i < rate ? "w-4 h-4 md:w-5 md:h-5 stroke-[#FBAD39] fill-[#FBAD39]" : "w-4 h-4 md:w-5 md:h-5";
    stars.push(<StarIcon className={className} />);
  }

  return stars;
}
