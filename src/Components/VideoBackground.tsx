import React, { useState, useEffect } from 'react'
import YouTube, {YouTubePlayer} from 'react-youtube'

const VideoBackground = () => {
let videoElement: YouTubePlayer = null
const video_id = "PspTnK0xhL8"

const params = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0, 
      disablekb: 1,
      showinfo: 0,
      autohide: 1,
      mute: 1, 
      loop: 1,
      playlist: video_id
    },
  }

const _onReady = (event: YouTubePlayer) => {
    videoElement = event
    console.log(event.target)
    videoElement.target.playVideo()
}

return (
    <div className="vid-container off">
      <YouTube videoId={video_id} opts={params} onReady={_onReady}/>
    </div>
  )

}

export default VideoBackground