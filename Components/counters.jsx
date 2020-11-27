import React, { Component } from 'react'
import './components.css'

class CounterLabel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const Styles = {
            svgContainer:   {
                width:  '25%',
                height: '95%',
            },
            TextContainer_1:    {
                fontSize:   '3vmin',
            },
            TextContainer_2:    {
                fontSize:   '6vmin'
            }
        }
        return(
            <svg style={Styles.svgContainer}>
                <text x='0'     y="35%" style={Styles.TextContainer_1}>Timer</text>
                <text x='50%'   y="80%" style={Styles.TextContainer_2}>{this.props.text}</text>
            </svg>
        )
    }
}

export { CounterLabel }