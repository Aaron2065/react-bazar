// src/pages/SuccessPurchase.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPurchase = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    // Redirige al inicio
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>¡Compra Exitosa!</h2>
      <p>Gracias por tu compra. Tu pedido ha sido registrado con éxito.</p>
      <button
        onClick={handleGoHome}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default SuccessPurchase;
