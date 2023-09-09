import React, { useState } from 'react';

const BookingForm = ({ event }) => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketCountChange = (e) => {
    const count = parseInt(e.target.value);
    setTicketCount(count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="booking-form">
      <h2>Book Tickets for {event.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          name="ticketCount"
          placeholder="Number of Tickets"
          value={ticketCount}
          onChange={handleTicketCountChange}
        />
        <button type="submit">Book Tickets</button>
      </form>
    </div>
  );
};

export default BookingForm;
