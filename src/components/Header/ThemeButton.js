import React from 'react'
import { useThemeContext } from '../../Contexts/ThemeContext'
import { ReactComponent as LightIcon } from '../../assets/lightMode.svg';
import { ReactComponent as DarkIcon } from '../../assets/darkMode.svg';

// Render a button to toggle between dark and light mode themes
const ThemeButton = () => {
    // Context used to toggle the theme
    const {theme, toggleTheme} = useThemeContext();
    
  return (
    <button onClick={toggleTheme} className='p-half bg-white pointer border-none rounded text-color-black'>{theme === 'light' ?  <DarkIcon/> : <LightIcon/>}</button>
  )
}

export default ThemeButton