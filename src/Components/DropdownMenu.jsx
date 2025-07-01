import { useState } from 'react';
import '../styles/DropdownMenu.css';

const DropdownMenu = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('Categorias');

  const handleChange = (event) => {
    const selected = event.target.value;
    setFilter(selected);
    onFilterChange(selected);
  };

  return (
    <div className="dropdown-container">
      <select value={filter} onChange={handleChange} className="dropdown-select">
        <option value="Categorias">Categorías</option>
        <option value="tinto">Tintos</option>
        <option value="blanco">Blancos</option>
        <option value="rosado">Rosados</option>
      </select>
    </div>
  );
};

export default DropdownMenu;