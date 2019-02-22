// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  changeBitrate = () => {
    console.log(this.state)
        this.setState({
            settings:{
            ...this.state.settings, bitrate:12
            }
        })
        console.log(this.state)
    }

    changeResolution = () => {
        console.log(this.state)
            this.setState({
                settings:{
                ...this.state.settings, 
                video:{
                    resolution: '720p'
                }
                }
            })
            console.log(this.state)
        }

    render(){
        return(
            <div>

            <button
            className="bitrate"
            onClick={this.changeBitrate}
            >
                {this.state.settings.bitrate}
            </button>
            <button
            className="resolution"
            onClick={this.changeResolution}
            >
                {this.state.settings.video.resolution}
            </button>
            </div>
        )
    }
}