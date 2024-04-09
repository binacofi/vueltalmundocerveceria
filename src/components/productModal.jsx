import {addToCar} from "../carStore"

export default function ProductModal({product, showModal, closeModal}) {

  function SetQuantity(e)  {
    product.quantity = e
  }

  function AddProductToCar() {
    addToCar(product)
  }

  return(
    <div className={`w-full ${ showModal ? "" : "hidden" } h-screen top-0 left-0 fixed bg-neutral-800/90`}>
      <div className="flex justify-end px-5 py-3">
        <button onClick={closeModal} className="font-medium text-lg text-white">x</button>
      </div>
      <div className="w-full justify-center flex px-5">
        <div className="p-5 bg-neutral-100 w-full max-w-sm rounded-sm shadow-lg">
          <div className="flex justify-center w-full">
            <img className=" max-h-64" alt={`Cerveza ` + product?.name} src={product?.singleImg}></img>
          </div>
          <div className="flex items-center justify-between font-medium text-xl mt-10">
            <span>{product?.name}</span>
            <span>{product?.abv}%</span>
          </div>
          <p className="text-base mt-2"><span className="font-medium">Ref: </span>{product?.price}</p>
          <p className="text-xs my-3">{product?.description}</p>
          <div className="flex items-center justify-between gap-2 mt-2">
            <input onChange={e => SetQuantity(e.target.value)} type="number" value={product.quantity} min={1} className="text-base px-3 py-2 w-1/4 bg-white border rounded-sm"></input>
            <button onClick={AddProductToCar} className="py-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 w-3/4 rounded-sm">agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}
