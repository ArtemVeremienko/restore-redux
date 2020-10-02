import React from 'react'
import './shopping-cart-table.css'

export const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Learn C++ in 3 days</td>
            <td>2</td>
            <td>$30</td>
            <td>
              <button className="btn btn-outline-danger">
                <span className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success">
                <span className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning">
                <span className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $60
      </div>
    </div>
  )
}