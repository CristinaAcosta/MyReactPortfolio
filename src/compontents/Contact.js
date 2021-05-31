import React from 'react';
import {Form, } from 'react-bootstrap';
import Style from './style.css';

function Contact() {
    return (
        <div class="allpg">
        <Form id="contact">
        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
            
            </div>
    )
}

export default Contact;