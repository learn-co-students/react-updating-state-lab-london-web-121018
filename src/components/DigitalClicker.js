import React, { Component } from 'react';

 export default class DigitalClicker extends Component {

    constructor() {
      super();
      this.state = {
         timesClicked: 0
      };
   };

    clickHandler = () => {
      let time = this.state.timesClicked;
      this.setState({
         timesClicked: ++time
      })
   }

    render() {
      return (
         <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      )
   }
}
