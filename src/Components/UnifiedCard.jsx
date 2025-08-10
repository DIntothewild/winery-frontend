// src/components/UnifiedCard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { useCartContext } from '../context/CartContext';
import '../styles/UnifiedCard.css';

const UnifiedCard = ({
  variant = 'default',
  product,
  title,
  image,
  route,
  onClick,
  showRating = false,
  showPrice = false,
  showActions = false,
  showCategory = false,
  className = ''
}) => {
  const [ratingValue, setRatingValue] = useState(null);
  const { addItemToCart } = useCartContext(); // ojo: addItemToCart
  const navigate = useNavigate();

  const getVariantConfig = () => {
    switch (variant) {
      case 'home':
        return {
          showRating: false,
          showPrice: false,
          showActions: false,
          showCategory: false,
          clickable: true
        };
      case 'product':
      case 'carousel':
        return {
          showRating: true,
          showPrice: true,
          showActions: true,
          showCategory: true,
          clickable: false
        };
      default:
        return {
          showRating,
          showPrice,
          showActions,
          showCategory,
          clickable: !!onClick || !!route
        };
    }
  };

  const config = getVariantConfig();

  const cardData = {
    title: title || product?.nombre,
    image: image || product?.image || (product?.imagen ? `/images/${product.imagen}` : null),
    price: product?.precio,
    category: product?.categoria,
    rating: product?.puntuacion,
    description: product?.descripcion
  };

  const handleClick = () => {
    if (config.clickable) {
      if (onClick) onClick(route);
      else if (route) navigate(route);
    }
  };

  const handleRatingChange = (newValue) => setRatingValue(Number(newValue));

  const handleAddToCart = () => {
    if (product && addItemToCart) {
      addItemToCart(product);
      navigate('/cart');
    }
  };

  const getCardClasses = () => {
    const baseClass = 'unified-card';
    const variantClass = `unified-card--${variant}`;
    return `${baseClass} ${variantClass} ${className}`;
  };

  // Variant: home
  if (variant === 'home') {
    return (
      <div className={getCardClasses()} onClick={handleClick}>
        <img src={cardData.image} alt={cardData.title} className="unified-card__media" />
        <div className="unified-card__title">{cardData.title}</div>
      </div>
    );
  }

  // Variants: product / carousel / default
  return (
    <div className={getCardClasses()}>
      <img src={cardData.image} alt={cardData.title} className="unified-card__image" />

      <div className="unified-card__content">
        {config.showRating && cardData.rating && (
          <div className="unified-card__rating">
            <StarRating initialValue={cardData.rating} onRatingChange={handleRatingChange} />
          </div>
        )}

        <h3 className="unified-card__name">{cardData.title}</h3>

        {config.showCategory && cardData.category && (
          <p className="unified-card__category">{cardData.category}</p>
        )}

        {config.showActions && (
          <div className="unified-card__actions">
            {config.showPrice && cardData.price && (
              <span className="unified-card__price">Precio: ${cardData.price}</span>
            )}

            {/* Siempre: Compra ahora */}
            <button
              onClick={handleAddToCart}
              className="unified-card__btn unified-card__btn--primary"
            >
              Compra ahora
            </button>

            {/* Solo en NO product: Más información */}
            {variant !== 'product' && (
              <button
                onClick={() => navigate(`/producto/${product?.id}`)}
                className="unified-card__btn unified-card__btn--secondary"
              >
                Más información
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

UnifiedCard.propTypes = {
  variant: PropTypes.oneOf(['home', 'product', 'carousel', 'default']),
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    categoria: PropTypes.string,
    puntuacion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    descripcion: PropTypes.string
  }),
  title: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
  onClick: PropTypes.func,
  showRating: PropTypes.bool,
  showPrice: PropTypes.bool,
  showActions: PropTypes.bool,
  showCategory: PropTypes.bool,
  className: PropTypes.string
};

export default UnifiedCard;