import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function videoQuestion () {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)



}

export default videoQuestion