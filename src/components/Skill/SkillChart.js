import React, { Component } from 'react'
import { Bubble } from 'react-chartjs-2'
import { dotsData } from './Data'

class SkillChart extends Component {
    constructor(props) {
        super(props)

        // Define the radius of each dot
        let radius = 10;
        this.state = {
            data: {
                datasets: [
                    {
                        data: this.getDotsXY(radius),
                        backgroundColor: this.getDotsBg(),
                    }
                ],
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    bodyFontSize: 20,
                    bodyFontStyle: 'bold',
                    bodyFontFamily: 'Ubuntu',
                    footerFontSize: 17,
                    footerFontFamily: 'Ubuntu',
                    footerSpacing: 7,
                    footerMarginTop: 12,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var x = tooltipItem.xLabel
                            var y = tooltipItem.yLabel
                            // Tooltip title
                            var i = 0
                            while (i < dotsData.length) {
                                if (x === dotsData[i].x && y === dotsData[i].y)
                                    return dotsData[i].title
                                i++
                            }
                        },
                        footer: function(tooltipItem, data) {
                            var x = tooltipItem[0].xLabel
                            var y = tooltipItem[0].yLabel
                            // Tooltip description
                            var i = 0
                            while (i < dotsData.length) {
                                if (x === dotsData[i].x && y === dotsData[i].y)
                                    return dotsData[i].description
                                i++
                            }
                        },
                    }
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                stepSize: 50,
                                callback: function(label, index, labels) {
                                    if (index === 1) { return " " }
                                },
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Understanding & Confidence >",
                                fontSize: 25,
                                fontStyle: "bold",
                                fontFamily: "Ubuntu",
                                fontColor: "#fff",
                                padding: 10
                            },
                            gridLines:{
                                color: "#9C9B9A",
                                lineWidth: 3,
                                drawTicks: false,
                            },
                        }
                    ], 
                    xAxes: [
                        {
                            ticks: {
                                stepSize: 50,
                                callback: function(label, index, labels) {
                                    if (index === 1) { return "" }
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Time >",
                                fontSize: 25,
                                fontStyle: "bold",
                                fontFamily: "Ubuntu",
                                fontColor: "#fff",
                                padding: 0,
                            },
                            gridLines:{
                                color: "#9C9B9A",
                                lineWidth: 3,
                                drawTicks: false,
                            },
                        }
                    ]
                }
            }
        }
    }

    getDotsXY(radius) {
        var dotsXY = []
        var i = 0;
        while (i < dotsData.length) {
            var obj = {
                x: dotsData[i].x,
                y: dotsData[i].y,
                r: radius
            }
            dotsXY.push(obj)
            i++
        }
        return dotsXY
    }

    getDotsBg() {
        var dotsBg = []
        var i = 0;
        while (i < dotsData.length) {
            dotsBg.push(dotsData[i].color)
            i++
        }
        return dotsBg
    }

    render() {
        return (
            <Bubble 
                data={ this.state.data } 
                options={ this.state.options } />
        )
    }

}

export default SkillChart
