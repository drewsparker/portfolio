import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <section className="contact-section">
            <Container fluid id="contact">
                <Container className="contact-content">
                    <Row className="contact-header">
                        <Col md={7}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="validationCustomName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter name.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="validationEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                    required
                                    type="email" 
                                    placeholder="Enter email" 
                                    />
                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter email.</Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="validationMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                    required
                                    type="text" 
                                    placeholder="Enter message" 
                                    />
                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter message.</Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default ContactForm;