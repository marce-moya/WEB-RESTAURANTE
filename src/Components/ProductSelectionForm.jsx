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
            <option value="Tradicional Surtido de Mariscos">Tradicional Surtido de Mariscos</option>
            <option value="Tradicional Queso">Tradicional Queso</option>
            <option value="Tradicional Pino de Loco">Tradicional Pino de Loco</option>
            <option value="Tradicional Pino de Carne">Tradicional Pino de Carne</option>
            <option value="Tradicional Ostión Queso">Tradicional Ostión Queso</option>
            <option value="Tradicional Jamón Queso">Tradicional Jamón Queso</option>
            <option value="Tradicional Champiñon Queso">Tradicional Champiñon Queso</option>
            <option value="Tradicional Camarón Queso">Tradicional Camarón Queso</option>
            <option value="Tradicional Aceituna Queso">Tradicional Aceituna Queso</option>
            <option value="Nueva Mechada Queso">Nueva Mechada Queso</option>
            <option value="Nueva Chupe de Loco">Nueva Chupe de Loco</option>
            <option value="Chupe de Jaiba">Chupe de Jaiba</option>
            <option value="Capresse">Capresse</option>
            <option value="Jugo de Piña embotellado">Jugo de Piña embotellado</option>
            <option value="Pepsi en lata">Pepsi en lata</option>
            <option value="Pepsi Zero en lata">Pepsi Zero en lata</option>
            <option value="Limón Soda en lata">Limón Soda en lata</option>
            <option value="Jugo de Durazno enbotellado">Jugo de Durazno enbotellado</option>
            <option value="Canada Dry en lata">Canada Dry en lata</option>
            <option value="Agua mineral sin gas">Agua mineral sin gas</option>
            <option value="Agua mineral con gas">Agua mineral con gas</option>
            
          </select>
        </label>
        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
};

export default ProductSelectionForm