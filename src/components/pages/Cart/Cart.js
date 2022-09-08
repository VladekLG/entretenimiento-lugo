import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

export const Cart = () => {

  const {themeColor} = useContext(ThemeContext)

  return (
    <div>
      <p>Cart {themeColor}</p>
    </div>
  )
}
