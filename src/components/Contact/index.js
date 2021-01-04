import React, { Component } from 'react'
import * as EmailValidator from 'email-validator'
import emailjs from 'emailjs-com'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import {
    ContactTitle,
    ContactText,
    EmailForm,
    SendBtnContainer
} from './ContactElements'
import { Input, TextArea } from '../Input/InputElements'
import SendingModal from './SendingModal'
import Button from '../Button'
import { EmailJsData } from './Data'

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            firstLoad: true,
            showModal: false,
            sent: false,
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    onInputChanged = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    inputClass = id => {
        var input = document.getElementById(id)
        if (this.state.firstLoad) {
            if (id === "email" && this.state.email !== "" && !EmailValidator.validate(this.state.email)) 
                return "error-input"
            return ""
        }
        if (input.value === "" || (id === "email" && !EmailValidator.validate(input.value))) 
            return "error-input"
        else return ""
    }

    sendEmail = event => {
        this.setState({ firstLoad: false })
        // If there is error input in the form, reject send email request
        if (document.getElementsByClassName('error-input').length > 0) {
            // Since the user hits the send button and it fails, the wrong input red bottom border can be shown

            // Shaking animation
            document.getElementById("send-btn").animate([
                { transform: 'translateX(-3px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
            ], { duration: 250 })

            return
        }

        // Show the sending modal
        this.setState({ showModal: true })
        let form = document.getElementById('email-form')
        let SERVICE_ID = EmailJsData.serviceID
        let TEMPLATE_ID = EmailJsData.templateID
        let USER_ID = EmailJsData.userID

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
            .then((result) => {
                this.setState({ sent: true })
                setTimeout(() => {
                    this.setState({
                        showModal: false
                    })
                }, 1500)
            }, (error) => {
                console.log(error.text);
            })
    }

    componentDidMount() {
        // Resize
        var emptyCol = document.getElementById('contact-empty-col')
        var contactContentCol = document.getElementById('contact')
        
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

        // Add Send button click event listener
        document.getElementById("send-btn").addEventListener("click", this.sendEmail)

    }

    render() {
        return (
            <Container fluid id="contact-container">
                <Row style={{height: 100 + '%'}}>
                    <Col xs={1} sm={1} md={1} lg={1} id="contact-empty-col" />
                    <Col xs={11} sm={11} md={11} lg={11} id="contact">
                        <ContactTitle>Contact Me</ContactTitle>
                        <ContactText>
                            I'm interested in any opportunites related to software development.
                            If you have any enquiries or questions, please contact me by the form below.
                        </ContactText>
                        <EmailForm id="email-form">
                            <Input id="name" name="name" className={this.inputClass("name")} placeholder={"Name"} 
                                width={"40%"} onChange={this.onInputChanged} />
                            <Input id="email" name="email" className={this.inputClass("email")} placeholder={"Email"}
                                width={"57%"} float={"right"} onChange={this.onInputChanged} />
                            <Input id="subject" name="subject" className={this.inputClass("subject")} placeholder={"Subject"}
                                width={"100%"} onChange={this.onInputChanged} />
                            <TextArea id="message" name="message" className={this.inputClass("message")} placeholder={"Message"} width={"100%"} 
                                height={"40%"} display={"block"} onChange={this.onInputChanged} />
                            <SendBtnContainer>
                                <Button id={"send-btn"} text={"send"} padding={"23px 160px"} float={"right"} />
                            </SendBtnContainer>
                        </EmailForm>
                    </Col>
                </Row>
                <SendingModal show={this.state.showModal} sent={this.state.sent}/>
            </Container>
        )
    }
}

export default Contact