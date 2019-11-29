import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import EventsList from './components/events-list';
import CreateEvent from './components/create-event';

function App() {
  return (
    <div className='App'>
      <CreateEvent />
      <EventsList />
    </div>
  );
}

export default App;
