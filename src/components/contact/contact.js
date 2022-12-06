import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
require('dotenv').config()

// function ContactForm() {
//     const [validated, setValidated] = useState(false);

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         setValidated(true);
//     };
//     return (
//         <section className="contact-section">
//             <Container fluid id="contact">
//                 <Container className="contact-content">
//                     <Row className="contact-header">
//                         <Col md={7}>
//                             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                                 <Form.Group className="mb-3" controlId="validationCustomName">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control
//                                         required
//                                         type="text"
//                                         placeholder="Enter name"
//                                     />
//                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                                     <Form.Control.Feedback type="invalid">Please enter name.</Form.Control.Feedback>
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="validationEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control
//                                         required
//                                         type="email"
//                                         placeholder="Enter email"
//                                     />
//                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                                     <Form.Control.Feedback type="invalid">Please enter email.</Form.Control.Feedback>
//                                     <Form.Text className="text-muted">
//                                         We'll never share your email with anyone else.
//                                     </Form.Text>
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="validationMessage">
//                                     <Form.Label>Message</Form.Label>
//                                     <Form.Control
//                                         required
//                                         type="text"
//                                         placeholder="Enter message"
//                                     />
//                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                                     <Form.Control.Feedback type="invalid">Please enter message.</Form.Control.Feedback>
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit">
//                                     Submit
//                                 </Button>
//                             </Form>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </section>
//     );
// }

// export default ContactForm;



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

        // if (!validateEmail(event.email)) {
        //     console.error('Invalid email')
        //     return
        // }

        emailjs
            .sendForm(
                process.env.REACT_SERVICE_ID, process.env.REACT_TEMPLATE_ID, e.target, process.env.REACT_USER_ID
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
    };

    return (
        <section className="contact-section">
            <Container fluid id="contact">
                <Container className="contact-content">
                    <Row className="contact-header">
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
                                        onChange={()=>{this._handleChangeEvent(this.state.data);}} 
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
                                    <Button className="btn btn-outline-primary my-3" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Contact;  