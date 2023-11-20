import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
    console.log(products);
  return (
    <div className='py-10'>
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">Shopping everyday</h1>
            <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur vitae, dicta quibusdam dolor architecto corrupti ipsa repellendus. Excepturi nam, error dolorem placeat perspiciatis adipisci. Commodi veritatis at ducimus corporis eos blanditiis quas, pariatur accusantium incidunt inventore nobis, provident autem cum excepturi aspernatur minima iusto est voluptatibus repellat repudiandae alias nemo.</p>
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
            {/* <ProductsCard/> */}
            {
                 products.map((item)=>(
                    <ProductsCard key={item._id} product={item}/> //now go to productCard
                ))
            }
        </div>
    </div>
  )
}

export default Products

