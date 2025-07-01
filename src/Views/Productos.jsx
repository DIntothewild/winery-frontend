import { useEffect, useState } from "react";
import MediaCard from "../Components/MediaCard";
import DropdownMenu from "../Components/DropdownMenu";
import "../styles/Productos.css"; // archivo de estilos para la vista

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

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

  // Lógica del filtro
const filteredProducts =
  filter === "Categorias" || !filter
    ? products
    : products.filter((product) => product.categoria === filter);

  return (
    <div className="productos-container">
      <DropdownMenu
        onFilterChange={setFilter} // pasamos la función para cambiar filtro
      />
      <div className="productos-grid">
        {filteredProducts.map((product, index) => (
          <div className="productos-item" key={index}>
            <MediaCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}