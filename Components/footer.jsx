import React, { Component } from 'react'
import { CounterLabel } from './'
import { FooterButton } from './'
import './components.css'

class ScoreLabel extends Component{
    render(){
        const Styles = {
            svgContainer:{
                width:  '25%',
                height: '95%',
                dominantBaseline: 'middle',
                textAnchor:     'middle'
            },
            TextContainer:    {
                fontSize:   '6vmin',
            },
        }
        return(
            <svg style={Styles.svgContainer}>
                <text x="50%" y='50%' style={Styles.TextContainer}>
                    {'Score:' + this.props.text + '/5'}
                </text>
            </svg>
        )
    }
}

class Footer extends Component {
    constructor(props){
        super(props)

    }

    clickEvent(msg){
        console.log(msg)
    }

    render(){
        const Styles = {
            divContainer:{
                background: 'rgb(250, 235, 215)',
                height:     '10%',
                width:      '100%',
                position:   'absolute',
                bottom:     '0px',
                opacity:    '0.9',
                display:    'flex'
            }
        }
        return(
            <div style={Styles.divContainer}>
                <CounterLabel text={this.props.remainTime}/>
                <FooterButton clickEvent={this.props.setPlay} enable={this.props.isPlay} text="Start"/>
                <FooterButton clickEvent={this.props.setPlay} enable={this.props.isPlay} text="Stop"/>
                <ScoreLabel text={this.props.Score}/>
            </div>
        )
    }
}

export { Footer }