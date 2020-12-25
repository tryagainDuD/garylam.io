import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { 
    SkillTitle,
    SkillContent,
    ChartContainer,
    Span,
    PS,
    LegendsContainer,
    Legends,
    Legend,
    ColorBlock,
    DotTitle
} from './SkillElements'
import SkillChart from './SkillChart'
import { dotsData } from './Data'

class Skill extends Component {

    constructor() {
        super();
        this.state = {
            charData: {}
        }
    }

    componentDidMount() {
        // Get the elements that need to resize by media queries
        // bigSlogan is also for adding the typing animation
        var chartCol = document.getElementById('chart-col')
        var skillText = document.getElementById('skill')
        var chartContainer = document.getElementById('chart-container')
        var varySpan = document.getElementById('vary-span')
        var skillFlexContainer = document.getElementById('skill-flex-chart-container')

        // Defined the functions to resize
        const handleMinWidth = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
                skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"
            }
        }
        const handleMaxWidth1500 = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"

                varySpan.innerText = "below"
                skillFlexContainer.style.display = "block"
            }
        }
        const handleMinWidth1500 = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
                skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"

                varySpan.innerText = "on the right"
                skillFlexContainer.style.display = "none"
            }
        }
        const handleMaxWidth = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
            }
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
        }
        else if (window.matchMedia("(max-width: 1500px)").matches) {
            chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"

            varySpan.innerText = "below"
            skillFlexContainer.style.display = "block"
        }
        else if (window.matchMedia("(min-width: 1500px)").matches) {
            chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
            skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"

            varySpan.innerText = "on the right"
            skillFlexContainer.style.display = "none"
        }
        else if (window.matchMedia("(min-width: 1200px)")) {
            chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
            skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"
        }

        window.matchMedia("(min-width: 1200px)").addListener(handleMinWidth);
        window.matchMedia("(max-width: 768px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1200px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1500px)").addListener(handleMaxWidth1500);
        window.matchMedia("(min-width: 1500px)").addListener(handleMinWidth1500);
    }

    render() {

        const legend = dotsData.map((dot) => 
            <Legend>
                <ColorBlock color={ dot.color } />
                <DotTitle>{ dot.title }</DotTitle>
            </Legend>
        );

        return (
            <>
                <Container fluid id="skill-container">
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1}></Col>
                        <Col xs={5} sm={5} md={5} lg={5} id="skill">
                            <SkillTitle>Skills</SkillTitle>
                            <SkillContent>
                                The main area I feel condfident in is front-end development. 
                                <br />
                                Building web apps by HTML, CSS, JS (React.js) with interactive layouts and animations.
                                <br />
                                Please hover the dots within the graph <Span id="vary-span">on the right</Span> to know more about my skills againsting the two aspects.  
                            </SkillContent>
                            <PS>* The higher the point is plotted into the graph, the quicker I can get use to it, develop my knowledge on it </PS>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} id="chart-col">
                            <ChartContainer id="chart-container">
                                <LegendsContainer>
                                    <Legends>{ legend }</Legends>
                                </LegendsContainer>
                                <SkillChart />
                            </ChartContainer>
                        </Col>
                    </Row>
                </Container>
                <Container fluid id="skill-flex-chart-container" style={{display: "none"}}>
                    <Row>
                        <Col>
                            <ChartContainer>
                                <LegendsContainer>
                                    <Legends>{ legend }</Legends>
                                </LegendsContainer>
                                <SkillChart />
                            </ChartContainer>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default Skill
