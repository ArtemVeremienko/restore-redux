import React from 'react'
import './app.css'
import { withBookstoreService } from '../hoc'

const App = ({ bookstoreService }) => {
  console.dir(bookstoreService.getBooks())
  return <div>App</div>
}

export default withBookstoreService()(App)