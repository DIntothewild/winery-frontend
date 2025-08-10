// src/Components/Slide.jsx
/* import '../App.css';
import StarRating from './StarRating';
import Button from '@mui/material/Button';
import { useCartContext } from '../context/CartContext';

export const Slide = ({ image, name, price, description, puntuacion, product }) => {
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    console.log('Producto añadido al carrito:', product);
    addItemToCart(product);
  };

  return (
    <div className="card">
      <div
        style={{
          height: "400px",
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '16px'
        }}
      >
        <img
          className="slide-image"
          src={image}
          alt={name}
          style={{ height: '100%', objectFit: 'contain' }}
        />
      </div>
      <StarRating initialValue={puntuacion} readOnly={true} />
      <h2>{name}</h2>
      <p className="precio">
  {typeof price === "number" ? `${price.toFixed(2)} €` : "Precio no disponible"}
</p>
      <p>{description}</p>
      <Button variant="contained" onClick={handleAddToCart} sx={{ mt: 4 }}>
        Compra aquí
      </Button>
    </div>
  );
}; */