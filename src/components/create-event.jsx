import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios';
import fetch from 'isomorphic-fetch';

class CreateEvent extends Component {
  state = {};

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { ID, Title, Description } = this.state;

    fetch('http://localhost:8080/event', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ ID, Title, Description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    // axios
    //   .post('http://localhost:8080/event', { ID, Title, Description })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <>
        <div className='container'>
          <br />
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <input
                  className='form-control'
                  type='text'
                  name='ID'
                  placeholder='ID'
                  onChange={this.onChange}
                />
              </Col>

              <Col>
                <input
                  className='form-control'
                  type='text'
                  name='Title'
                  placeholder='Title'
                  onChange={this.onChange}
                />
              </Col>

              <Col>
                <input
                  className='form-control'
                  type='text'
                  name='Description'
                  placeholder='Description'
                  onChange={this.onChange}
                />
              </Col>

              <Col>
                <Button type='submit'>Submit</Button>
              </Col>
            </Row>
          </form>

          <br />
        </div>
      </>
    );
  }
}

export default CreateEvent;
