import React from 'react';


  const ShoppingCart = ({ cartItems }) => {

  return (
    <div>
      <h1 style={{ fontFamily: 'fantasy', color: 'orange' }}>Productos reservados:</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Aquí faltan detalles adicionales para mostrar detalles adicionales del carrito */}
    </div>
  );
};

export default ShoppingCart