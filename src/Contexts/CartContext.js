import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [quantity, setQuantity] = useState(0);
    return (
        <cartContext.Provider value={{quantity, setQuantity}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}