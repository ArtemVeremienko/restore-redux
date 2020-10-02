import React from 'react'
import './shopping-cart-table.css'

export const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <th>1</th>
          <th>Learn C++ in 3 days</th>
          <th>2</th>
          <th>$30</th>
          <th>
            <button className="btn btn-outline-danger">
              <span className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success">
              <span className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning">
              <span className="fa fa-minus-circle" />
            </button>
          </th>
        </tbody>
      </table>

      <div className="total">
        Total: $60
      </div>
    </div>
  )
}