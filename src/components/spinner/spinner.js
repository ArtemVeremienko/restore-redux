import React from 'react'
import './spinner.css'

export const Spinner = () => {
  return (
    <div className="spinner spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}