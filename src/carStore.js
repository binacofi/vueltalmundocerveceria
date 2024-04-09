import {atom} from "nanostores"

export const car = atom([]);

export function addToCar(newBeer) {

  let copy = car.get()
  let found = false

  car.set([])

  copy.map(beer => {

    if (beer.id == newBeer.id) {

      beer.quantity
      found = true
    }

  })

  if (!found) {
    copy.push(newBeer)
  }

  car.set(copy)
}

export function removeFromCar(removedBeer) {
  
  let copy = car.get()
  car.set([])

  copy = copy.filter(beer => beer.id != removedBeer.id)
  car.set(copy)
}
