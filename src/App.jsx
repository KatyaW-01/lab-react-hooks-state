import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering
  const products = [
    { id: 1, name: 'Apple', price: '$1.00', inStock: true, category: 'fruits' },
    { id: 2, name: 'Milk', price: '$2.50', inStock: false, category: 'dairy' },
    { id: 3, name: 'Banana', price: 0.5, inStock: false, category: 'fruits' },
    { id: 4, name: 'Cheddar Cheese', price: '$4.00', inStock: true, category: 'dairy' },
    { id: 5, name: 'Orange', price: '$1.20', inStock: true, category: 'fruits' },
    { id: 6, name: 'Yogurt', price: '$3.00', inStock: true, category: 'dairy' },
    { id: 7, name: 'Strawberry', price: '$2.00', inStock: false, category: 'fruits' },
  ]

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Display initial sample products */}
      <ProductList />

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
