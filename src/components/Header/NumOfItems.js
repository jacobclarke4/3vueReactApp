import React from 'react'
import { useCartContext } from '../../Contexts/CartContext'


// Render the number of items in the cart
const NumOfItems = () => {
    // Use the CartContext to retrieve the number of items
    const {quantity} = useCartContext();
  return (
    <div className='numOfItems bg-purple text-color-white'>
        <p className='margin-none'>{quantity}</p>
    </div>
  )
}

export default NumOfItems