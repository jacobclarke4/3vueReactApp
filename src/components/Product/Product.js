import React from 'react'
import Stars from './Stars'
import { useState } from 'react';
import Purchase from './Purchase';

// Render Prodcut from the value given in props
const Product = ({value}) => {
    // State used to reveal subtitle text in value
    const [revealMore, setRevealMore] = useState(false);

    // Function to toggle revealMore state when button is clicked
    const toggleRevealMore = () => {
        setRevealMore(!revealMore);
    }

    return (
        <div>
            <div className='flex space flex-wrap gap-1'>
                <div style={{minWidth:'60%'}} className='flex flex-3 space flex-wrap gap-1 bg-white p-1 rounded'>
                    <div className='flex flex-column align-start gap-1'>
                        <h1 className='margin-none font-bold'>{value.title}</h1>
                        <Stars/>
                        <h3 className='margin-none font-bold'>$12.99</h3>
                        <button onClick={toggleRevealMore} className='btn pointer bg-purple text-color-white rounded box-shadow'>
                            <h3 className='margin-none'>{value.linkTitle}</h3>
                        </button>
                        <p className={`margin-none text-color-secondary ${revealMore ? 'opacity-1':'opacity-0'}`}>{value.subtitle}</p>
                    </div>
                    <div className='flex rounded overflow-hidden '>
                        <a href={'/' + value.linkUrl}>
                            <img className='width-100' src={value.imageUrl} alt={value.title} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-column flex-1 space gap-1 bg-white rounded p-1'>
                    <Purchase/>
                </div>
                
            </div>
            
        </div>
    )
}
export default Product