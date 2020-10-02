import React from 'react'
import './book-list-item.css'

export const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt={`cover for ${title}`} />
      </div>
      <div className="book-details">
        <span>{title}</span>
        <p className="book-author">{author}</p>
        <p className="book-price">${price}</p>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>

    </div>
  )
}