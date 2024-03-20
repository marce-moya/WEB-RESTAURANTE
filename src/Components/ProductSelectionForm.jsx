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
            <option value="Vegana No Carne">Vegana No Carne</option>
            <option value="Surtido de Mariscos">Tradicional Surtido de Mariscos</option>
            <option value="Queso">Tradicional Queso</option>
            <option value="Pino (Loco)">Tradicional Pino de Loco</option>
            <option value="Pino (Carne)">Tradicional Pino de Carne</option>
            <option value="Ostión Queso">Tradicional Ostión Queso</option>
            <option value="Jamón Queso">Tradicional Jamón Queso</option>
            <option value="Champiñón Queso">Tradicional Champiñon Queso</option>
            <option value="Camarón Queso">Tradicional Camarón Queso</option>
            <option value="Aceituna Queso">Tradicional Aceituna Queso</option>
            <option value="Carne Mechada Queso">Nueva Mechada Queso</option>
            <option value="Chupe de Loco">Nueva Chupe de Loco</option>
            <option value="Chupe de Jaiba">Chupe de Jaiba</option>
            <option value="Capresse">Capresse</option>
            <option value="Jugo de Piña embotellado">Bebida Piña</option>
            <option value="Pepsi en lata">Bebida Pepsi</option>
            <option value="Pepsi Zero en lata">Bebida Pepsi Zero</option>
            <option value="Limón Soda en lata">Bebida Limón Soda</option>
            <option value="Jugo de Durazno enbotellado">Bebida Durazno</option>
            <option value="Canada Dry en lata">Bebida Canada</option>
            <option value="Agua mineral sin gas">Bebida Agua sin Gas</option>
            <option value="Agua mineral con gas">Bebida con Gas</option>
            
          </select>
        </label>
        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
};

export default ProductSelectionForm