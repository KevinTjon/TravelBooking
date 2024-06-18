import React from 'react';

const BookingDetails = ({ booking }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Booking Details</h5>
              <p className="card-text">Flight: {booking.flight}</p>
              <p className="card-text">Hotel: {booking.hotel}</p>
              <p className="card-text">Car Rental: {booking.carRental}</p>
              <p className="card-text">Total Price: ${booking.totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
