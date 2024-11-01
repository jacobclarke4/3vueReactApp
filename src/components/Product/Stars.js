import React, { useState } from 'react'
import { ReactComponent as StarIcon } from '../../assets/star.svg';


// Render stars/reviews of a given profit
const Stars = () => {
    // Set the initial star count to 4 (for example)
    const [starCount, setStarCount] = useState(4);
    return (
        <div className='flex center align-center gap-1'>
            <h3 className='margin-none font-reg text-color-secondary'>{starCount}/5</h3>
            <div className='text-color-purple'>
                {/* Create an array of stars based on the starCount */}
                {Array.from({ length: starCount }).map((_, index) => (
                    <StarIcon/>
                ))}
            </div>
        </div>
    )
}

export default Stars