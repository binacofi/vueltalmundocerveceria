'use client'
import {useEffect, useState} from "preact/hooks"
import ProductCard from "../components/productCard.jsx"
import ProductModal from "../components/productModal.jsx"
import CarModal from "../components/carModal.jsx"
export default function ProductsLayout({beers}) {

  const [selectBeer, SetSelectBeer] = useState(beers[1])
  const [showModal, SetShowModal] = useState(false) 

  useEffect(() => {

  }, [selectBeer])

  const ClickBeer = (beer) => {
    SetSelectBeer(beer)
    SetShowModal(true)
  }
  
  return(
    <>
    <div class="w-full max-w-3xl text-gray-50">
      <main class="w-full flex justify-center w-full flex-col gap-8 p-10">
        <div class="w-full flex justify-center w-full flex-col gap-2">
          <p class="w-full text-center text-xl font-medium">CONOCE NUESTRAS CERVEZAS</p>
          <p class="w-full text-center text-base">A un par de clicks de distancia</p>
        </div>
        <ul className="flex items-center flex-col sm:flex-row sm:flex-wrap justify-center w-full gap-8 sm:py-10 py-5">
    {
      beers.map((beer) => {
          return  (
            <li onClick={() => ClickBeer(beer)} className="w-full flex justify-center sm:w-1/3 sm:hover:w-2/5 duration-200 transition-all hover:cursor-pointer">
              <ProductCard product={beer}/>
            </li>
          )
      })
    }
        </ul>
      </main>
    </div>
    <ProductModal product={selectBeer} showModal={showModal} closeModal={() => SetShowModal(false)}/>
    <CarModal/>
    </>
  ) 
}
