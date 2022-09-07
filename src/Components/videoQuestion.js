import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function videoQuestion () {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)



  function YouTubeGetID(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
 }
}

export default videoQuestion