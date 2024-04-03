import React, { useState } from 'react'
import data from '../assets/products.json'
import { Products } from './Products';

export const Home = () => {
  const [products] = useState(data);
  return (
    <div className='product-container'>
      {products.map((product) => (
        <Products key={product.id} product={product}/>
      ))}
    </div>
  );
}
