import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search');
    
    if (query) {
      fetch(`http://localhost:5000/api/items?q=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [location.search]);

  const handleCardClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Resultados de búsqueda</h2>
      {results.length > 0 ? (
        <Row className="g-4">
          {results.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100" onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <strong>Precio:</strong> ${item.price}
                    <br />
                    <strong>Rating:</strong> {item.rating}
                  </Card.Text>
                  <Button variant="primary" onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item.id);
                  }}>Ver Detalle</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No se encontraron productos.</p>
      )}
    </Container>
  );
};

export default SearchResults;
