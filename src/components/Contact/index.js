import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    ContactTitle,
    ContactText,
    SendBtnContainer
} from './ContactElements'
import { Input, TextArea } from '../Input/InputElements'
import Button from '../Button'

class Contact extends Component {

    componentDidMount() {
        // Resize
        var emptyCol = document.getElementById('contact-empty-col')
        var contactContentCol = document.getElementById('contact-content')
        
        if (window.matchMedia("(max-width: 576px)").matches) {
            emptyCol.className = ""
            contactContentCol.className = "col"
        } 
        else if (window.matchMedia("(min-width: 576px)").matches) {
            emptyCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            contactContentCol.className = "col-xs-11 col-sm-11 col-md-11 col-lg-11"
        }

        const handleMaxWidth = function(e) {
            if (e.matches) {
                emptyCol.className = ""
                contactContentCol.className = "col"
            }
        }

        const handleMinWidth = function(e) {
            if (e.matches) {
                emptyCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                contactContentCol.className = "col-xs-11 col-sm-11 col-md-11 col-lg-11"
            }
        }

        window.matchMedia("(max-width: 576px)").addListener(handleMaxWidth);
        window.matchMedia("(min-width: 576px)").addListener(handleMinWidth);
    }

    render() {
        return (
            <Container fluid id="contact-container">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} id="contact-empty-col" />
                    <Col xs={11} sm={11} md={11} lg={11} id="contact-content">
                        <ContactTitle>Contact Me</ContactTitle>
                        <ContactText>
                            I'm interested in any opportunites related to software development.
                            If you have any enquiries or questions, please contact me by the form below.
                        </ContactText>
                        <Input placeholder={"Name"} width={"40%"} />
                            <Input placeholder={"Email"} width={"57%"} float={"right"} />
                        <Input placeholder={"Subject"} width={"100%"} />
                        <TextArea placeholder={"Message"} width={"100%"} height={"40%"} display={"block"} />
                        <SendBtnContainer>
                            <Button text={"send"} padding={"23px 160px"} float={"right"} />
                        </SendBtnContainer>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact