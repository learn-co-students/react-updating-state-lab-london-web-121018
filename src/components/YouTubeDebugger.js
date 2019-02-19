// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  updateBitrate = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  updateResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateBitrate} className="bitrate">{this.state.settings.bitrate}</button>

        <button onClick={this.updateResolution} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }



}


