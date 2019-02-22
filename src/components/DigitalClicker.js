// Code DigitalClicker Component Here
import React from 'react';
export default class DigitalClicker extends React.Component {

  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  incrementClicks = () => {
    const incrementByOne = this.state.timesClicked +1
    this.setState({
      timesClicked: incrementByOne
    })
  }

  render() {
    return (
      <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
    )
  }
}
