

// src/Components/Carousel.jsx
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UnifiedCard from './UnifiedCard'; // Este es tu nuevo componente estilizado

import { responsive } from './data'; // Define tus breakpoints aquí

const CarouselComponent = ({ items, titulo }) => {
  const slides = items.map((item) => (
    <UnifiedCard
      key={item.id}
      image={item.image || `/images/${item.image}`}
      name={item.title || item.nombre}
      price={item.price || item.precio}
      description={item.description || item.descripcion}
      puntuacion={item.rating || item.puntuacion}
      product={item}
      variant="carousel" // 👉 Esto evita que aparezca el botón 'Ver detalle'
    />
  ));

  return (
    <section style={{ padding: '80px 48px 40px', marginBottom: '40px' }}>
      {titulo && <h2 className="carousel-heading">{titulo}</h2>}
      <Carousel responsive={responsive}>
        {slides}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;