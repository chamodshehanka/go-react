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
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.events.map(event => (
                <tr key={event.ID}>
                  <td>{event.ID}</td>
                  <td>{event.Title}</td>
                  <td>{event.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default EventsList;
