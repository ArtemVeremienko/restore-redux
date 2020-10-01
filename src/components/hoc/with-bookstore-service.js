import React from 'react'
import { BookStoreServiceConsumer } from '../bookstore-service-context'

export const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (bookstoreService) =>
            <Wrapped {...props} bookstoreService={bookstoreService} />
        }
      </BookStoreServiceConsumer>
    )
  }
}