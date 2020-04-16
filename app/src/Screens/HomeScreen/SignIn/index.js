import React, {Component} from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap'
class SignIn extends Component {
  render() {
    return (
      <>
      <div className = "login-container">
        <Form>
          <Form.Group className = "group">
            <Form.Label> Username </Form.Label>
            <Form.Control type="text" placeholder ="Enter username"/>
            <Form.Text className ="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className = "group">
            <Form.Label> Password </Form.Label>
            <Form.Control type="Password" placeholder ="Enter password"/>
            <Form.Text className ="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant ="secondary">
          Login
          </Button>
        </Form>
      </div>
      </>
    );
  }
}

export default SignIn;
