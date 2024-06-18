import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SearchResults = ({ results }) => {
  return (
    <Container className="mt-5">
      <Row>
        {results.map(result => (
          <Col key={result.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${result.price}
                  <br />
                  <strong>Availability:</strong> {result.availability}
                  <br />
                  <strong>Ratings:</strong> {result.ratings} / 5
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
