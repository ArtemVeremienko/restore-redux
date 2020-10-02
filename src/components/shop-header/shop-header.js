import React from 'react'
import { Link } from 'react-router-dom'
import './shop-header.css'

export const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <h2 className="logo text-dark" href="#">ReStore</h2>
      </Link>
      <Link to="/cart">
        <p className="shopping-cart">
          <span className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
      </p>
      </Link>
    </header >
  )
}