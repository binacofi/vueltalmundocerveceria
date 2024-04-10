export default function Alert({showAlert, product}) {

  return(
    <div className="fixed top-3 left-0 w-full">
      <div className="w-full py-3 px-10 flex justify-end">
        <div className={`w-full max-w-sm bg-amber-500 p-3 rounded-sm shadow-lg ${showAlert ? "" : "hidden"}`}>
          <p>Agregado al carrito</p>
          <p className="text-sm font-light">{product?.name}</p>
        </div>
      </div>
    </div>
  )
}
