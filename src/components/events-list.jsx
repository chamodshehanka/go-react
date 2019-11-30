import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';

class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    // fetch('http://localhost:8080/events')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       events: data
    //     });
    //   })
    //   .catch(console.log);

    Axios.get('http://localhost:8080/events').then(res => {
      this.setState({
        events: res.data
      });
    });
  }

  onDelete = e => {
    console.log(`http://localhost:8080/events/${e}`);
    Axios.delete(`http://localhost:8080/events/${e}`, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
                    <Button
                      className='btn btn-danger'
                      onClick={this.onDelete.bind(this, event.ID)}
                    >
                      Delete
                    </Button>{' '}
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
