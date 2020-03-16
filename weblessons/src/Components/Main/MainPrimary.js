import React from 'react';
import YouTube from 'react-youtube';


export default class MainPrimary extends React.Component {

    constructor() {
        super()
        this.opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }
    };

    keepAspect() {
        this.player = document.getElementById('playercontainer')

        if (document.documentElement.clientHeight * 0.6 * 16 / 9 < document.documentElement.clientWidth * 0.6) {
            this.player.style.height = String(document.documentElement.clientHeight * 0.6) + 'px'
            this.player.style.width = String(document.documentElement.clientHeight * 0.6 * 16 / 9) + 'px'
            console.log(document.documentElement.clientWidth - this.player.offsetWidth)
            // document.getElementById('secondary').style.width = String((document.documentElement.clientWidth - document.getElementById('primary').offsetWidth)*0.9) + 'px'
            // document.getElementById('primary').style.width = String((this.player.clientWidth*1.05)) + 'px'
        }

        else {
            this.player.style.height = String(document.documentElement.clientWidth * 0.6 * 9/16) + 'px'
            this.player.style.width = String(document.documentElement.clientWidth * 0.6) + 'px'
            // document.getElementById('secondary').style.width = String((document.documentElement.clientWidth - document.getElementById('primary').offsetWidth)*0.9) + 'px'
            // document.getElementById('primary').style.width = String((this.player.clientWidth *1.05)) + 'px'        
        // this.opts.height = String((this.player.offsetWidth)*9/16) + 'px'
        }

    }

    componentDidMount() {
        window.addEventListener('resize', this.keepAspect)
        this.keepAspect()
    }

    render() {
        return (
            <div id='playercontainer'>
                <YouTube
                    videoId="pLHtg9KkTxw"
                    opts={this.opts}
                // onReady={this._onReady}
                />

            </div>
        )
    }

}
