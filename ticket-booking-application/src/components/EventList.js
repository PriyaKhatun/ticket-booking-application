import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a href={`/event/${event.id}`}>{event.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
