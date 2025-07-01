// CartItem.jsx

import { Box, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ product, onRemove, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      onQuantityChange(product.id, newQuantity);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2,
        p: 1,
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '100%',
        flexDirection: 'row',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '70%' }}>
        <img
          src={`/images/${product.imagen}`}
          alt={product.nombre}
          style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '16px' }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">{product.nombre}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.categoria}
          </Typography>
          <Typography variant="body1" color="text.primary">
            ${product.precio}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'flex-end' }}>
        <TextField
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          size="small"
          sx={{ width: '60px', marginRight: '8px' }}
          inputProps={{ min: 1 }}
        />
        <IconButton onClick={() => onRemove(product.id)} color="secondary">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
