import React, { useState } from 'react'

const ProductSelectionForm = ({ onAddToCart }) => {
  // Estado para almacenar la selección del usuario
  const [selectedProduct, setSelectedProduct] = useState('');

  // Función para manejar el cambio en la selección del usuario
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  // Función para manejar el envío del formulario y agregar el producto seleccionado al carrito
  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar si se ha seleccionado un producto
    if (selectedProduct) {
      // Llamar a la función onAddToCart y pasar el producto seleccionado
      onAddToCart(selectedProduct);
      // Limpiar la selección después de agregar el producto al carrito
      setSelectedProduct('');
    } else {
      // Mostrar un mensaje de error si no se ha seleccionado ningún producto
      alert('Por favor selecciona un producto antes de agregarlo al carrito');
    }
  };

  return (
    <div>
      <h2>Selecciona un Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecciona un producto:
          <select value={selectedProduct} onChange={handleProductChange}>
            <option value="">Selecciona...</option>
            <option value="Producto 1">Producto 1</option>
            <option value="Producto 2">Producto 2</option>
            <option value="Producto 3">Producto 3</option>
          </select>
        </label>
        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
};

export default ProductSelectionForm