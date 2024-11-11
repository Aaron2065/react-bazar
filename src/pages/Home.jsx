// src/pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/items?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1 className="text-primary mb-4">Busca Productos en el Bazar</h1>
      <form onSubmit={handleSearch} className="w-100" style={{ maxWidth: '600px' }}>
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
            placeholder="Buscar productos..."
            style={{ padding: '10px' }}
          />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
