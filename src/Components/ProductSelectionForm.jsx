import React, { useState } from 'react'

const ProductSelectionForm = ({ onAddToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState('');


  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
 
    if (selectedProduct) {
      
      onAddToCart(selectedProduct); //para enviar la info del producto al padre
      
      setSelectedProduct('');
    } else {
      
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
            <option value="Producto 1">Vegana No Carne</option>
            <option value="Producto 2">Tradicional Surtido de Mariscos</option>
            <option value="Producto 3">Tradicional Queso</option>
            <option value="Producto 4">Tradicional Pino de Loco</option>
            <option value="Producto 5">Tradicional Pino de Carne</option>
            <option value="Producto 6">Tradicional Ostión Queso</option>
            <option value="Producto 7">Tradicional Jamón Queso</option>
            <option value="Producto 8">Tradicional Champiñon Queso</option>
            <option value="Producto 9">Tradicional Camarón Queso</option>
            <option value="Producto 10">Tradicional Aceituna Queso</option>
            <option value="Producto 11">Nueva Mechada Queso</option>
            <option value="Producto 12">Nueva Chupe de Loco</option>
            <option value="Producto 13">Chupe de Jaiba</option>
            <option value="Producto 14">Capresse</option>
            <option value="Producto 15">Bebida Piña</option>
            <option value="Producto 16">Bebida Pepsi</option>
            <option value="Producto 17">Bebida Pepsi Zero</option>
            <option value="Producto 18">Bebida Limón Soda</option>
            <option value="Producto 19">Bebida Durazno</option>
            <option value="Producto 20">Bebida Canada</option>
            <option value="Producto 21">Bebida Agua sin Gas</option>
            <option value="Producto 22">Bebida con Gas</option>
            
          </select>
        </label>
        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
};

export default ProductSelectionForm