import React from 'react'
import Product from '../Product/Product';

// Render the Product (Module2) from the given data
const Module2 = ({data}) => {
  return (
    <div>
      
        {/* Map over the data array and extract the value for the 'product' key */}
        {data.map((moduleObj, index) => {
            const [key, value] = Object.entries(moduleObj)[0];
            return (
              // Render Product with index 1, which represents the product
              <div key={index}>
                  {index === 1 && <Product value={value}/> }
              </div>
            );
        })}

    </div>
  )
}

export default Module2