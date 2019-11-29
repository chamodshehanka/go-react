import React, { Component } from 'react';

class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/events')
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <div>
          {this.state.events.map(event => (
            <p>{event.title}</p>
          ))}
        </div>
      </>
    );
  }
}

export default EventsList;
