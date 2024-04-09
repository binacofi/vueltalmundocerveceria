import {useState} from "preact/hooks"
import { car, removeFromCar } from "../carStore"

export default function CarModal() {

  const [showCar, SetShowCar] = useState(false)

  const openCar = () => SetShowCar(true)
  const closeCar = () => SetShowCar(false)

  function SetQuantity(e)  {
    product.quantity = e
  }

  function RemoveProductFromCar(beer) {
    removeFromCar(beer) 
  }

  return(
    <>
      <div className={`z-10 w-full ${ showCar ? "" : "hidden" } h-screen top-0 left-0 fixed bg-neutral-800/90`}>
        <div className="flex justify-end px-5 py-3">
          <button onClick={closeCar} className="font-medium text-lg text-white">x</button>
        </div>

        <div className="w-full justify-center flex px-5">
          <div className="p-5 bg-neutral-100 flex flex-col mt-16 justify-center w-full max-w-sm rounded-sm shadow-lg">
    {
      car.get().length > 0 
      ? (
        <>
          <ul className="flex flex-col gap-4">
        {
          car.get().map(beer => {
            return(
            <li className="flex flex-row justify-between">
              <div className="w-2/4">
                <span className=" block text-base font-medium">{beer?.name}</span>
                <span className=" block text-sm">ref: {beer?.price}</span>
              </div> 
              <div className="flex flex-row gap-2 justify-end">
                <input onChange={e => SetQuantity(e.target.value)} type="number" min={1} defaultValue={beer?.quantity} className="text-base px-3 py-2 w-1/4 bg-white border rounded-sm"></input>
                <button className="py-2 px-3 bg-red-500 text-white hover:bg-red-600  rounded-sm"><i class="fi fi-rr-trash flex items-center"></i></button>
              </div>
            </li>

            )
          })
        }
          </ul>
          <div className="border-t p-5 mt-5">
            <p className="w-full text-right"><span className="font-medium">Total:</span> 100</p>
          </div>
          <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-neutral-800 text-center rounded-sm">Comprar</button>
          <button className="text-xs font-light underline mt-3" onClick={closeCar}>continuar comprando</button>
        </>
      )
      : (
        <>
        <span className="block w-full text-center text-xl font-medium text-neutral-600">Tu carrito esta vacío</span>
        <button className="text-xs font-light underline mt-10" onClick={closeCar}>continuar comprando</button>
        </>
      )
    }
          </div>
        </div>
      </div>

      <button onClick={openCar}  className="z-1 shadow-xl bg-amber-500 text-neutral-800 fixed bottom-10 right-10 shadow-xl sm:right-36 px-6 py-5 rounded-full">
        <div className="flex gap-1 justify-center items-center align-center">
          <i className="fi fi-rs-shopping-cart flex items-center"></i>
          <span>{car.get().length}</span> 
        </div>
      </button>
    </>
  )
}
