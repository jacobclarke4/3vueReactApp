import { createContext, useEffect, useState, useContext } from "react";

const themeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };

      useEffect(() => {
        document.body.className = theme;
      
     }, [theme]);
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </themeContext.Provider>
    );
}

export const useThemeContext = () => {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}