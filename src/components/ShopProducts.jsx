import { useSelector } from "react-redux";

import Product from "./Product";
import { useState } from "react";

function ShopProducts() { 
  const { products, total } = useSelector((data) => data.shop);

  
  return (
    <div>
      {products.map((product) => {
        const { name, price, image, amount } = product;
        
        return (
          <Product
            key={product.name}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}

      <div className="">
        {products.length  == 0 ? <h1 className="text-3xl font-bold select-none flex justify-center items-center h-[50vh]">Tugadi🙅❌</h1> : ''}
      </div>

      <div className="max-w-xl mt-3 mx-auto flex justify-between">
        <h1 className="font-bold text-2xl">Total</h1>
        <h2 className="font-bold text-2xl">${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default ShopProducts;