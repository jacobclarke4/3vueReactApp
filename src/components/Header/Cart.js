import React from 'react'

import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import NumOfItems from './NumOfItems';

// Renders Cart component displays the cart icon and number of items within it
const Cart = () => {
  return (
    <div className='relative'>
        <button className='btn bg-none pointer text-color-black'><CartIcon/></button>
        <NumOfItems/>
    </div>
  )
}

export default Cart