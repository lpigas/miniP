import React from 'react'
import './MyButton.css'

export default function MyButton({children, onClick, className}) {
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}
