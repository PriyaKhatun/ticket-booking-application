import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import BookingForm from './components/BookingForm';
import './styles.css';

const App = () => {
  const events = [
    {
      id: 1,
      name: 'Live Concert ',
      date: '2023-09-10',
      time: '19:00',
      venue: 'Orion Mall',
      description: 'An amazing Live concert event.',
    },
    {
      id: 2,
      name: 'Concert',
      date: '2023-11-05',
      time: '18:30',
      venue: 'Phoenix MarketCity',
      description: 'Another fantastic Live concert.',
    },
  ];

  return (
    <div className="app">
      <RegistrationForm />
      <EventList events={events} />
      <EventDetail event={events[0]} />
      <BookingForm event={events[0]} />
    </div>
  );
};

export default App;
