import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantity: () => {},
  countCartItems: () => 0,
  setItems: () => {},
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('item-cart') || '[]');

export function CartContextProvider({ children }) {
  const [items, setItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('item-cart', JSON.stringify(items));
    console.log('Items updated:', items);
  }, [items]);

  function countCartItems() {
    const totalItems = items.reduce((total, item) => total + (item.quantity || 1), 0);
    console.log('Count Cart Items:', totalItems);
    return totalItems;
  }

  function addItemToCart(newItem) {
    console.log('Adding item to cart:', newItem);
    const updatedCart = [...items];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === newItem.id);
  
    if (updatedItemIndex < 0) {
      updatedCart.unshift({ ...newItem, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
  
    setItems(updatedCart);
  }
  

  function removeItemFromCart(itemId) {
    const updatedCart = [...items];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (updatedItemIndex < 0) {
      console.error("Item not found in cart");
      return;
    }

    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity--;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setItems(updatedCart);
  }

  function updateItemQuantity(itemId, newQuantity) {
    const updatedCart = [...items];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (updatedItemIndex < 0) {
      console.error("Item not found in cart");
      return;
    }

    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity = newQuantity;
    updatedCart[updatedItemIndex] = updatedItem;

    setItems(updatedCart);
  }

  const value = {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    items,
    setItems,
    countCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
