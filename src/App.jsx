import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'


const App = () => {
  // TODO: Implement state for dark mode toggle
  const [mode, setMode] = useState('dark')
 
  const [cartItems, updateCart] = useState([])

  function addItemsToCart(item) {
    updateCart((prevCart)=>[...prevCart,item])
  }

  function removeItemsFromCart(itemToRemove) {
    updateCart((prevCart)=> {
      return prevCart.filter((item,index)=> index !== itemToRemove)
    })
  }
  
  const products = [
    { id: 1, name: 'Apple', price: '$1.00', inStock: true, category: 'fruits' },
    { id: 2, name: 'Milk', price: '$2.50', inStock: false, category: 'dairy' },
    { id: 3, name: 'Banana', price: 0.5, inStock: false, category: 'fruits' },
    { id: 4, name: 'Cheddar Cheese', price: '$4.00', inStock: true, category: 'dairy' },
    { id: 5, name: 'Orange', price: '$1.20', inStock: true, category: 'fruits' },
    { id: 6, name: 'Yogurt', price: '$3.00', inStock: true, category: 'dairy' },
    { id: 7, name: 'Strawberry', price: '$2.00', inStock: false, category: 'fruits' },
  ]

  const [filter, setFilter] = useState('all')

  const filteredProducts = products.filter(product => {
    if(filter === 'fruits') {
      return product.category === 'fruits'
    } else if (filter === 'dairy') {
      return product.category === 'dairy'
    } else {
      return true 
    }
  })

  let content;
  if (filteredProducts.length === 0) {
    content = <p>No products available.</p>;
  } else {
    content = <ProductList products={filteredProducts} addItemsToCart={addItemsToCart} />;
  }


  return (
    <div>
      <h1>🛒 Shopping App</h1>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle mode={mode} updateMode={setMode}/>

      <label>Filter by Category: </label>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="dairy">Dairy</option>
      </select>

      
      {content}

      <Cart cartItems={cartItems} removeItemsFromCart={removeItemsFromCart}/>

    </div>
  )
}

export default App
