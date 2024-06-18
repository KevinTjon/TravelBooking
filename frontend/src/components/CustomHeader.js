import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomHeader = () => {
  return (
    <header className="p-5 bg-light text-center">
      <Container>
        <h1 className="display-4">Welcome to Travel Booking App!</h1>
        <p className="lead">
          Book flights, hotels, and rental cars hassle-free.
        </p>
        <div>
          <Button variant="primary" className="me-2">Search Flights</Button>
          <Button variant="success" className="me-2">Search Hotels</Button>
          <Button variant="info">Search Rental Cars</Button>
        </div>
      </Container>
    </header>
  );
}

export default CustomHeader;
