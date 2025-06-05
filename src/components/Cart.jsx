import React from 'react'

const Cart = ({cartItems, removeItemsFromCart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item,index)=> (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={()=>removeItemsFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
