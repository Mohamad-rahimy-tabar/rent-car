import { allCars } from "../../../../../data/allCars";

export async function GET(request, { params }) {
  const requestingTittle = params.cartittle;
  const selectedCar = allCars.cars.find((c) => c.title === requestingTittle);

  return Response.json(selectedCar);
}
