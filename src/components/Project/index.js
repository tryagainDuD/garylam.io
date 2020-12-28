import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    ProjectContainer,
    ProjectVideoContainer,
    ProjectTitle,
    ProjectSmallTitle,
    ProjectContent,
    ProjectVideoBg
} from './ProjectElements.js'
import { projectData } from './Data'
import FBK from '../../videos/shirakami_fubuki.mp4'
import Lamy from '../../videos/lamy.mp4'

class Project extends Component {

    render() {

        const lamy = 'Lamy'

        const projects = projectData.map((project) => 
            <ProjectContainer>
                <ProjectSmallTitle>{ project.title }</ProjectSmallTitle>
                <ProjectContent>{ project.description }</ProjectContent>
                <ProjectVideoContainer>
                    <ProjectVideoBg autoPlay loop muted src={ project.src } type="video/mp4" />
                </ProjectVideoContainer>
            </ProjectContainer>
        );

        return (
            <Container fluid id="project-container">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={11} sm={11} md={11} lg={11} id="project-text">
                        <ProjectTitle>Project</ProjectTitle>
                        { projects }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Project
