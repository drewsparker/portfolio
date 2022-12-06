import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/contact.png";
import InputGroup from 'react-bootstrap/InputGroup';

const validateEmail = (input) => {
    const regex = new RegExp(/^[A-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\.[A-Z0-9_!#$%&'*+/=?`{|}~^-]+↵)*@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*$/i);
    return regex.test(input);
}

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        messsage: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();


        emailjs
            .sendForm(
                'service_o1ygidp', 'template_dqqqude', event.target, 'jre9G4DiRTlXc2Kqc'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        event.target.reset();
        alert("Thank you for your message! Someone will be in touch with you soon.");
    };

    return (
        <section className="contact-section">
            <Container fluid id="contact">
                <Container className="contact-content">
                    <Row id="contact-row" class='d-flex align-items-center'>
                        <Col md={7}>
                            <Form onSubmit={formSubmit}>
                                <div className="form-group">
                                    <Form.Group className="my-3" controlId="fullname">Full Name</Form.Group>
                                    <input
                                        type='text'
                                        class="form-control"
                                        id="fullname"
                                        name="fullname"
                                        defaultValue={data.fullname}
                                        onChange={() => { this._handleChangeEvent(this.state.data); }}
                                        // onchange={InputEvent}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <Form.Group className="my-3" controlId="phone">Phone Number</Form.Group>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="phone"
                                        name="phone"
                                        defaultValue={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div class="form-group">
                                    <Form.Group className="my-3" controlId="email">Email</Form.Group>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        defaultValue={data.email}
                                        onChange={InputEvent}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div class="form-group">
                                    <Form.Group className="my-3" controlId="message">Message</Form.Group>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="message"
                                        name="message"
                                        defaultValue={data.message}
                                        onChange={InputEvent}
                                        placeholder="Message"
                                    />
                                </div>
                                <div class="col-12">
                                    <Button id="contact-btn" className="btn btn-outline-primary px-5 mt-5" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col md={5} className="contact-image d-flex justify-content-center align-items-center">
                            <img src={myImg}
                            className="p-25"
                            alt="phone" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Contact;  