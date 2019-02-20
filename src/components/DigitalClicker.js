import React from 'react';
 
export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
        timesClicked: 0
    };
  }

  incrementButton = () =>{ 
    const newCount = this.state.timesClicked + 1
      this.setState({timesClicked: newCount  })
    }
 
  render() {
    return (
      <div>
        <button onClick={this.incrementButton}>{this.state.timesClicked}</button>
      </div>
    );
  }
}