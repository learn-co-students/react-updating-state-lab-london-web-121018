// Code DigitalClicker Component Here
import React from "react";

export default class DigitalClicker extends React.Component {
        constructor() {
            super();

            this.state = {
                timesClicked: 0
            }
        };

        addClickState = () => {
            let addedTimesClicked = this.state.timesClicked

            this.setState(
                {timesClicked: ++addedTimesClicked}
            );
        };

        render () {
            return (
                <button
                    onClick={this.addClickState}
                >{this.state.timesClicked}</button>
            );
        };
};