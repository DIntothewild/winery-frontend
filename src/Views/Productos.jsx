// src/Views/Productos.jsx
import { useEffect, useState } from "react";
import UnifiedCard from "../Components/UnifiedCard";
import DropdownMenu from "../Components/DropdownMenu";
import "../styles/Productos.css";

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    filter === "Categorias" || !filter
      ? products
      : products.filter((product) => product.categoria === filter);

  return (
    <div className="productos-container">
      <DropdownMenu onFilterChange={setFilter} />
      <div className="productos-grid">
        {filteredProducts.map((product) => (
          <div className="productos-item" key={product.id}>
            <UnifiedCard product={product} variant="carousel" />
          </div>
        ))}
      </div>
    </div>
  );
}