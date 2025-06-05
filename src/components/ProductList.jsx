import React from 'react'
import ProductCard from './ProductCard'


const ProductList = ({products,addItemsToCart}) => {
  return (
    <div>
      <h2>Available Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} addItemsToCart={addItemsToCart}/>
      ))}
    </div>
  )
}

export default ProductList
