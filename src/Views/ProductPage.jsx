// src/Views/ProductPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UnifiedCard from '../Components/UnifiedCard';
import ReactStars from 'react-rating-stars-component';
import '../styles/ProductPage.css';

export default function ProductPage() {
  const { id } = useParams();

  // Producto
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form reseña
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Lista de reseñas
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Carga producto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error al cargar producto:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Carga reseñas
  const loadReviews = async () => {
    try {
      setLoadingReviews(true);
      const res = await fetch(`http://localhost:3000/products/${id}/reviews`);
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Error cargando reseñas:', e);
      setReviews([]);
    } finally {
      setLoadingReviews(false);
    }
  };

  // Llamar a cargar reseñas cuando cambia el id
  useEffect(() => {
    loadReviews();
  }, [id]);

  // Enviar reseña
  const handleSubmitReview = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: Number(rating),
          comentario: comment?.trim() || ''
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error('Error POST review:', err);
        alert('No se pudo guardar la reseña.');
        return;
      }

      // Reset del formulario
      setRating(0);
      setComment('');

      // Refrescar lista
      loadReviews();
    } catch (e) {
      console.error('Fallo enviando reseña:', e);
      alert('Error de red enviando la reseña.');
    }
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="product-content-container">
      <h2 className="product-title">{product.nombre}</h2>

      <div className="product-content">
        {/* Card sin acciones a la izquierda */}
        <UnifiedCard
          variant="product"
          product={product}
          showModal={false}
          showActions={false}
        />

        {/* Columna derecha: info + reseñas */}
        <div className="product-details">
          <p className="product-price"><strong>Precio:</strong> ${product.precio}</p>
          <p><strong>Descripción:</strong> {product.descripcion}</p>
          <p><strong>Denominación:</strong> {product.denominacion || '—'}</p>
          <p><strong>Tipo:</strong> {product.tipo || '—'}</p>
          <p><strong>Categoría:</strong> {product.categoria || '—'}</p>

          <hr className="product-divider" />

          {/* Formulario reseña */}
          <div className="review-section">
            <h3>Deja tu reseña</h3>

            <label>
              Valoración:
              <ReactStars
                count={5}
                value={rating}
                onChange={(v) => setRating(Number(v))}
                size={28}
                isHalf={false}
                edit
              />
            </label>

            <label>
              Comentario:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe tu opinión sobre este vino..."
              />
            </label>

            <button onClick={handleSubmitReview}>Enviar reseña</button>
          </div>

          {/* Lista de reseñas */}
          <div className="reviews-list">
            <h3>Reseñas recientes</h3>
            {loadingReviews ? (
              <p>Cargando reseñas…</p>
            ) : reviews.length === 0 ? (
              <p>Aún no hay reseñas. ¡Sé el primero en opinar!</p>
            ) : (
              reviews.map((r) => (
                <div key={r.id} className="review-item">
                  <ReactStars
                    count={5}
                    value={Number(r.rating)}
                    size={18}
                    edit={false}
                  />
                  {r.comentario && <p className="review-text">{r.comentario}</p>}
                  <span className="review-date">
                    {new Date(r.created_at).toLocaleString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}