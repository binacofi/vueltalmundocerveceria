import {atom} from "nanostores"

export const car = atom([]);

export function addToCar(beer) {
  car.set([...car.get(), beer]);
  console.log("car: ", car.get())
}
