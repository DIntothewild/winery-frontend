/* import { useEffect, useState } from "react";
import { CarouselComponent } from "../Components/Carousel";
import offersData from "../Components/Offers/OffersData";
import TopProducts from "../Components/TopProducts";
import "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/images/vinedo.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '60px',
        paddingBottom: '120px'
      }}
    >
      <CarouselComponent items={products} titulo="Novedades" />
      <CarouselComponent items={offersData} titulo="Ofertas" />
      <CarouselComponent items={products} titulo="Más vendidos" />
    </div>
  );
};

export default Home; */

import { useEffect, useState } from "react";
import CarouselComponent from "../Components/Carousel";
import offersData from "../Components/Offers/OffersData";
const normalizeOffer = (offer) => ({
  ...offer,
  nombre: offer.title,
  imagen: offer.image,
  precio: offer.price,
  puntuacion: offer.rating,
  categoria: "OFERTA",
  descripcion: offer.description
});
import "../App.css";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/images/vinedo.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '60px',
        paddingBottom: '120px'
      }}
    >
      <CarouselComponent items={products} titulo="Novedades" />
      <CarouselComponent items={offersData.map(normalizeOffer)} titulo="Ofertas" />
      <CarouselComponent items={products} titulo="Más vendidos" />
    </div>
  );
};

export default Home;