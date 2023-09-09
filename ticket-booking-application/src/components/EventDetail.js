import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div className="event-detail">
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}</p>
      <p>Description: {event.description}</p>
      <a href={`/book/${event.id}`}>Book Tickets</a>
    </div>
  );
};

export default EventDetail;
