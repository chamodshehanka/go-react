import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

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
        <div className='container'>
          <Table striped bordered hover variant='dark'>
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
                  <td>
                    <Button className='btn btn-danger'>Delete</Button>{' '}
                    <Button>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default EventsList;
