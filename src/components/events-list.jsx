import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get('http://localhost:8080/events').then(res => {
      this.setState({
        events: res.data
      });
    });
  }

  onDelete = e => {
    axios
      .delete(`http://localhost:8080/events/${e}`)
      .then(res => {
        console.log(res.data);
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  onEdit = e => {
    axios
      .patch('http://localhost:8080/events/' + e.ID, {
        ID: e.ID,
        Title: 'go lang',
        Description: 'Angular flutter'
      })
      .then(res => {
        console.log(res);
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  onRowSelect = e => {
    console.log(e);
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
                <tr key={event.ID} onClick={this.onRowSelect.bind(this, event)}>
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
                    <Button onClick={this.onEdit.bind(this, event)}>
                      Edit
                    </Button>
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
