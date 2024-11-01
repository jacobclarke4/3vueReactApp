import React from 'react'


// Render modules that only contain subcontent (Module1) from the given data
const Module1 = ({data}) => {
    const firstModule = data[0];
    const [key, value] = Object.entries(firstModule)[0];
  return (
    <div className='flex flex-column bg-white'>
        <div className='flex flex-column center bg-white gap-1 rounded'>
            {/* Check if value has subcontent, if so, map it and render each content within subcontent */}
            {value.subContent && value.subContent.map((content, contentIndex) => (
                <div className='flex flex-column gap-1 ' key={contentIndex}>
                    <div className='flex flex-column gap-1 p-1'>
                        <h2 className='margin-none font-bold'>{content.title}</h2>
                        <p className='margin-none text-color-secondary'>{content.description}</p>
                    </div>
                    <div className='flex flex-column center align-center gap-1'>
                        <div className='description-image width-100 overflow-hidden '>
                            <img className='width-100 cover' src={content.imageUrl} alt={content.title}/>
                        </div>
                    </div>   
                </div>
            ))}
            <div className='flex center align-center' style={{paddingBottom: '1rem'}}>
                <a href={`/` + value.linkUrl}> 
                    <button className='btn bg-purple text-color-white rounded pointer' alt='Learn More'>
                        <h3 className='margin-none'>{value.linkTitle}</h3>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Module1