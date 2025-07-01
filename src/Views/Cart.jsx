// Cart.jsx
import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import CartItem from '../Components/CartItem'; // Asegúrate de ajustar la ruta de importación
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { items, removeItemFromCart, updateItemQuantity } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveItem = (id) => {
    removeItemFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    updateItemQuantity(id, newQuantity);
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.precio * item.quantity;
    });
    setTotalPrice(Math.round(total * 100) / 100);
  };

  React.useEffect(() => {
    calculateTotalPrice();
  }, [items]);

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Cesta de compra
      </Typography>

      {items.length === 0 ? (
        <Typography variant="h3" sx={{ textAlign: 'center', marginTop: 5 }}>
          Tu cesta está vacía
        </Typography>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </Box>
          <Typography variant="h5" color="text.primary" mt={3}>
            Total del carrito: <strong>€{totalPrice.toLocaleString('es')},00</strong>
          </Typography>
        </>
      )}
    </div>
  );
}

export default Cart;
