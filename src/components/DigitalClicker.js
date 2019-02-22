// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{
    state = {
        timesClicked: 0
    }

    updateClicks = () => {
        this.setState({
            timesClicked: this.state.timesClicked+1
        })
    }

    render(){
        return(
            <button
            onClick={this.updateClicks}
            >
                {this.state.timesClicked}
            </button>
        )
    }
}