// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: { resolution: '1080p' }
            }
        }
    }

    updateBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: { resolution: '720p' }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.updateBitRate}>Bitrate</button>
                <button className='resolution' onClick={this.updateResolution}>Resolution</button>
            </div>
        )
    }
}