export default function ProductCard({product}) {

  return(
    <div className="w-full flex flex-col shadow-lg">
      <div>
        <img alt="cerveza" className="w-full rounded-t-sm" src={product?.img} />
      </div>
      <div className="bg-amber-500 text-black p-4 flex flex-col gap-1 rounded-b-sm">
        <div className="flex justify-between">
          <span className="font-medium text-xl">{product?.name}</span> 
          <span className="font-medium text-xl">{product?.abv}%</span> 
        </div>
        <span className="text-neutral-800 text-xs">pack de cervezas</span>
        <span className="text-neutral-800">ref: {product?.price}</span>
      </div>
    </div>
  )
}
