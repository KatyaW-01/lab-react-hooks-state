import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', inStock: false },
]

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
