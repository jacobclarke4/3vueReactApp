import React from 'react'
import { useState } from 'react';
import { useCartContext } from '../../Contexts/CartContext';
import SmallLogo from './SmallLogo';

// Renders the Purchase component within the Product component
const Purchase = () => {
    // State to keep track of quantity that could be added to cart
    const [quantityToAdd, setQuantityToAdd] = useState(1);
    // State to keep track of quantity that is already added to cart
    const {quantity, setQuantity} = useCartContext();

    // Function to keep track of quantity that could be added to cart
    const handleQuantityChange = (e) => {
        setQuantityToAdd(parseInt(e.target.value));
    };

    // Function to recieve shipping date base on location
    const getShippingDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + 5); 
        return date.toLocaleDateString(); 
    };

    // Function to officially add quantity to cart; reset quantity to default
    const handleAddToCart = () => {
        setQuantity(quantity + quantityToAdd);
        setQuantityToAdd(1);
    }
  return (
    <>
        <div className='flex flex-column gap-1'>
            <h2 className='text-color-green margin-none font-bold'>In Stock</h2>
            <p className='margin-none text-color-secondary'>Get by <span className='text-color-purple'>{getShippingDate()}</span></p>
        </div>
        
        <div className='flex flex-column gap-1'>
            <div className='flex align-center gap-half'>
                <p className='margin-none text-color-secondary'>Sold by</p>
                <SmallLogo/>
            </div>
            <div className='flex align-center bg-white rounded'>
                <label htmlFor='quantity' className='margin-none'>Qty:</label>
                <input
                type='number'
                id='quantity'
                value={quantityToAdd}
                onChange={handleQuantityChange}
                min='1'
                className='width-100 p-1 bg-white text-color-secondary rounded border-none font-size-1'
                alt='Quantity to add'
                />
            </div>
            <button onClick={handleAddToCart} className='btn pointer rounded bg-purple text-color-white box-shadow' alt='Add to Cart'>
                <h3 className='margin-none'>Add to Cart</h3>
            </button>
        </div>
    </>
  )
}

export default Purchase