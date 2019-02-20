import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
 
  handleClick = () => {
      const previous = this.state.timesClicked
    this.setState({
        timesClicked: previous +1
    })
  };
 
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
 
export default DigitalClicker;
 