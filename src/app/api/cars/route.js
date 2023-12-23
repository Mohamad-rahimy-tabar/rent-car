import { allCars } from "../../../../data/allCars";

export async function GET(request) {

  
  return Response.json(allCars);
}
