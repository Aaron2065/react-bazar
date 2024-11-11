// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import SuccessPurchase from './pages/SuccessPurchase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/success" element={<SuccessPurchase />} />
      </Routes>
    </Router>
  );
}

export default App;
