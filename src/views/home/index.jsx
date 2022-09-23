import React, { memo, useEffect } from 'react'
import request from '@/services'

const Home = memo(() => {

  useEffect(() => {
    request.get({
      url: "/home/highscore"
    }).then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div>Home</div>
  )
})

export default Home