import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import YouTube, {YouTubePlayer} from 'react-youtube'

let videoElement: YouTubePlayer = null

export default function App() {
  const questions = useSelector((state: any) => state.questions)
  const questionIndex = useSelector((state: any) => state.index)
  const isAnswered = useSelector((state: any) => state.isAnswered)

  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const video_id = question.youtube_id
  const stopTime = question.stop


    const params = {
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      controls: 0, 
      disablekb: 1
    },
  }

  /* Advance to Next Question Upon Video Completion */

  const checkState = () => {
    let playerState: number = videoElement.target.playerInfo.playerState
    if (playerState === 0) {
      dispatch({
        type: 'SET_ANSWERED',
        answered: false,
      })

      dispatch({
        type: 'SET_INDEX',
        index: questionIndex + 1,
      })
    }
  }

  const questionInterval = () => {
    const interval = setInterval(async () => {
      let stopTime2 = question.stop
      if (videoElement && videoElement.target.getCurrentTime() > 0) {
        const elapsed_seconds = videoElement.target.getCurrentTime();
        let done = false

        if (elapsed_seconds >= (stopTime + 0.2))
        {
          if (videoElement.target.playerInfo.playerState === 2) {videoElement.target.playVideo()}
          done = true
        }

        /* Stop Video if Midpoint is reached */
        if (elapsed_seconds >= stopTime && !done)
        {
          videoElement.target.seekTo(stopTime)
          videoElement.target.pauseVideo()
        }
        done ? clearInterval(interval) : console.log("not done")

      }
    }, 200); }

  //get current time and video status in real time
  useEffect(() => {

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  useEffect(() => {
    if (isAnswered == true) {
    videoElement.target.seekTo(stopTime + 0.5)
    videoElement.target.playVideo()
    }
  }, [isAnswered]);

  const _onReady = (event: YouTubePlayer) => {
    videoElement = event;
    questionInterval()
  };

  return (
    <div className="video-question">
      <YouTube videoId={video_id} opts={params} onReady={_onReady} onStateChange={checkState}/>
    </div>
  )
}