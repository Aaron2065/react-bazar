// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const handlePurchase = () => {
    // Puedes agregar la lógica de compra aquí (si es necesario)
    // Luego, redirigir a la página de compra exitosa
    navigate('/success');
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{product.title}</h2>
      <img 
        src={product.images[0]} 
        alt={product.title} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <button 
        onClick={handlePurchase}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'block',
          width: '100%'
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductDetail;
