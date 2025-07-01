import { useState } from 'react';
import Modal from './Modal';
import StarRating from './StarRating';
import { useCartContext } from '../context/CartContext';
import '../styles/MediaCard.css';

export default function MediaCard({ product }) {
  const [open, setOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);
  const { addItemToCart } = useCartContext();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRatingChange = (newValue) => setRatingValue(Number(newValue));
  const handleAddToCart = () => addItemToCart(product);

  return (
    <>
      {product && (
        <div className="media-card">
          <img
            src={`/images/${product.imagen}`}
            alt={product.nombre}
            className="media-card-image"
          />

          <div className="media-card-content">
            <div className="media-card-rating">
              <StarRating initialValue={product.puntuacion} onRatingChange={handleRatingChange} />
            </div>

            <h3>{product.nombre}</h3>
            <p className="media-card-category">{product.categoria}</p>

            <div className="media-card-actions">
              <span className="media-card-price">Precio: ${product.precio}</span>
              <button onClick={handleClickOpen} className="btn-secondary">Reseña</button>
            </div>

            <button onClick={handleAddToCart} className="btn-primary">Compra aquí</button>
          </div>
        </div>
      )}

      <Modal open={open} onClose={handleClose} onRatingChange={handleRatingChange} />
    </>
  );
}

