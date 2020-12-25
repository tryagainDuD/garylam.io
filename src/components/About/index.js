import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    AboutTitle,
    AboutContent,
    ProgramWrapper,
    FileName,
    Code
} from './AboutElements'
import Button from '../Button'

class About extends Component {

    componentDidMount() {
        // Get the elements that need to resize by media queries
        // bigSlogan is also for adding the typing animation
        var codeCol = document.getElementById('code-col')
        var aboutText = document.getElementById('about')

        // Defined the functions to resize
        const handleMinWidth = function(e) {
            if (e.matches) {
                codeCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
                aboutText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"
            }
        }
        const handleMaxWidth = function(e) {
            if (e.matches) {
                codeCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                aboutText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
            }
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            codeCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            aboutText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
        }
        else if (window.matchMedia("(min-width: 1200px)")) {
            codeCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
            aboutText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"
        }

        window.matchMedia("(min-width: 1200px)").addListener(handleMinWidth);
        window.matchMedia("(max-width: 768px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1200px)").addListener(handleMaxWidth);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={5} sm={5} md={5} lg={5} id="about">
                        <AboutTitle>About Me</AboutTitle>
                        <AboutContent>
                            Passion in learning and coding, thinks continue to learn and explore new things is essential
                            in order to stay in tune with the lastest update of the 
                            working environment and create a quality product as a software developer.
                            <br />
                            {/* By finishing the Bachelor of Information Technology in the University of South
                            Australia,  it built up my academic foundation in software development but that's definitly not enough. */}
                            <br />
                            I'm eager to learn, to gain practical experience from development process, to engage in projects and
                            ultimately, build something that can inspire people a new way to live.
                        </AboutContent>
                        <Button text="resume" padding="23px 160px"/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} id="code-col">
                        <ProgramWrapper>
                            <Typing speed={0} cursorClassName="text-white">
                                <FileName>MySimpleLife.java</FileName>
                                <Code>
                                    public static void main(String args[]) <span>{String.fromCharCode(123)}</span><br />
                                </Code>
                                <Code>    Person me = new Person(21);</Code>
                                <Code>    int old = Math.floor((Math.random() * 11) + 60);</Code>
                                <Code>    while (me.isAlive())  <span>{String.fromCharCode(123)}</span></Code>
                                    <Code>        if (me.age() <span>{String.fromCharCode(60)}</span> old
                                    <span>{String.fromCharCode(41)}  </span> 
                                    </Code>
                                    <Code>            me.working();</Code>
                                    <Code>        me.learning();</Code>
                                    <Code>        me.chillingAtNight();</Code>
                                <Code>    {String.fromCharCode(125)}</Code>
                                <Code>{String.fromCharCode(125)}</Code>
                            </Typing>
                        </ProgramWrapper>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About
