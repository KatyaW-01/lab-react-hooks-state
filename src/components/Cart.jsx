import React from 'react'
import Button from '@mui/material/Button';

const Cart = ({cartItems, removeItemsFromCart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item,index)=> (
          <li key={index}>
            {item.name} - {item.price}
            <Button variant="outlined" color= "secondary" onClick={()=>removeItemsFromCart(index)} sx={{m:2}}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
