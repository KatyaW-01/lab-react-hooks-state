import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addItemsToCart }) => {
  let card;
  if (product.inStock) {
    card = styles.inStock;
  } else {
    card = styles.outOfStock;
  }

  let status;
  if (product.inStock) {
    status = styles.inStockStatus
  } else {
    status = styles.outOfStockStatus
  }

  let info;
  if (product.inStock) {
    info = styles.inStockInfo
  } else {
    info = styles.outOfStockInfo
  }

  return (
    <div
      className={card}
    >
      <h3 className = {info}>{product.name}</h3>
      <p className = {info}>Price: {product.price}</p>
      <p className={status}> Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button onClick={()=> addItemsToCart(product)} disabled={!product.inStock}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
