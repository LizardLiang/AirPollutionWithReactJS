import React, { Component } from 'react'
import './components.css'

class FooterButton extends Component{
    render(){
        const Styles = {
            divContainer:{
                width:  '25%',
                height: '100%'
            },
            buttonContainer:{
                disabled: this.props.text === 'Start' ? !this.props.enable : this.props.enable
            }
        }
        return(
            <div style={Styles.divContainer}>
                <button disabled={this.props.text === 'Stop' ? !this.props.enable : this.props.enable} onClick={() => this.props.clickEvent(123)}>{this.props.text}</button>
            </div>
        )
    }
}

export { FooterButton }