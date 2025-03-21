/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem } from "../lib/types";
import { products } from "../lib/products";


const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    const total = cartProducts.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setCartTotal(total);
  }, [cart]);

  const cartProducts = products
    .filter((filteredProduct) =>  
    cart.find((foundCartItem) => filteredProduct.id === foundCartItem.productId
    )
  )   
    .map((mappedProduct) => 
    {const cartItem = cart.find((cartItem) => mappedProduct.id === cartItem.productId)
      return {
        ...mappedProduct,
        quantity: cartItem!.quantity
      }
    }
  );



  const addToCart = (productId: number) => {
    setCart(cart.some((item) => item.productId === productId) ? cart.map((item) => (
      item.productId === productId ? {...item, quantity: item.quantity + 1} : item
    )) : [...cart, { productId, quantity: 1 }])
  };

  const removeFromCart  = (productId: number) => {
    setCart((currentCart) => currentCart.map((item) => item.productId === productId ? {...item, quantity: item.quantity - 1} : item).filter((filteredItem) => filteredItem.quantity > 0)
  )
  }

  const  deleteFromCart = (productId: number) => {
    setCart((currentCart) => currentCart.filter((filteredItem) =>  filteredItem.productId !== productId))
  }

  const getProductQuantity = (productId: number) => {
    return cart.find((item) => item.productId === productId)?.quantity || 0
  }

  return (
    <CartContext.Provider value={{
      addToCart,
      cart,
      cartProducts,
      cartTotal,
      deleteFromCart,
      getProductQuantity,
      removeFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be within a CartProvider")
  }

  return context;
}