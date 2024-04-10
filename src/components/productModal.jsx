import {addToCar} from "../carStore"

export default function ProductModal({product, showModal, closeModal, showAlert}) {

  function SetQuantity(e)  {

    if (e == "") {

    } else {

      const quantity = parseInt(e)

      if (quantity >= 1) {
        product.quantity = quantity
      }

    }
  }

  function AddProductToCar() {
    addToCar(product)
    closeModal()
    showAlert(true)
    setTimeout(() => {
      showAlert(false)
    }, 1500)
  }

  return(
    <div className={`z-10 w-full ${ showModal ? "" : "hidden" } h-screen top-0 left-0 fixed bg-neutral-800/90`}>
      <div className="flex justify-end px-5 py-3">
        <button onClick={closeModal} className="font-medium text-2xl text-white">x</button>
      </div>
      <div className="w-full justify-center flex px-5">
        <div className="p-5 bg-neutral-100 mt-16 sm:mt-0 w-full max-w-sm rounded-sm shadow-lg">
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
            <button onClick={AddProductToCar} className="py-2 bg-amber-500 hover:bg-neutral-800 hover:text-amber-500 transition-all duration-200 text-neutral-800 w-3/4 rounded-sm">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
