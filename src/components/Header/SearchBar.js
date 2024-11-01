import React from 'react'
import { useState, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

// Renders a SearchBar, just a visual representation
const SearchBar = () => {
    // State to track whether the input is focused or not
    const [isFocused, setIsFocused] = useState(false);
    // Ref to hold the input element
    const inputRef = useRef(null);

    // Function to focus on the input
    const handleInputFocus = () => {
      setIsFocused(true);
      inputRef.current.focus();
    }

    // Function to blur the input/lose focus
    const handleInputBlur = () => {
      setIsFocused(false);
    }

  return (
    <div onClick={handleInputFocus} className='search-bar-container flex flex-half'>
        <form className='search-bar flex flex-1 rounded bg-white'>
            <input
            ref={inputRef}
            className='border-none bg-white flex-1 text-color-secondary' 
            placeholder='Search Products' 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}>
            </input>
            <div className='text-color-purple'>
              <SearchIcon/>
            </div>
        </form>
  </div>
  )
}

export default SearchBar