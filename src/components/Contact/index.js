import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  


  return (
    <Form>

<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="password" placeholder="Please Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Message</Form.Label>
        <Form.Control type="input" placeholder="Your Message Here" />
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}




export default ContactForm;
