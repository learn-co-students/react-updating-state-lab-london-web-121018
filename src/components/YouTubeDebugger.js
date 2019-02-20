import React from 'react';
 
export default class YoutubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = { 
        errors: [], 
        user: null, 
        settings: { 
            bitrate: 8, 
            video: { 
                resolution: '1080p' 
                    } 
                }
            };
        }

    changeBitRate = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state.settings.bitrate)
    };

    changeResolution = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{resolution: "720p"
                    }
                }
            })
        console.log(this.state.settings.video.resolution)
    };


 
  render() {
    return (
      <div>
        <button onClick={this.changeBitRate} className= 'bitrate'>Bitrate</button>
        <button onClick={this.changeResolution} className= 'resolution'>resolution</button>
      </div>
    );
  }
}