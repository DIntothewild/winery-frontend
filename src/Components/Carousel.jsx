import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slide } from './Slide';
import { responsive } from './data';

export const CarouselComponent = ({ items, titulo }) => {
  const slides = items.map((item) => (
    <Slide
      key={item.id}
      image={item.image || `/images/${item.imagen}`}
      name={item.title || item.nombre}
      price={item.price || item.precio}
      description={item.description || item.descripcion}
      puntuacion={item.rating || item.puntuacion}
      product={item}
    />
  ));

  return (
    <section style={{
      padding: '80px 48px 40px', 
      marginBottom: '40px',
    }}>
      {titulo && <h2 className="carousel-heading">{titulo}</h2>}
      <Carousel responsive={responsive}>
        {slides}
      </Carousel>
    </section>
  );
};