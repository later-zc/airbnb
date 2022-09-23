import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import router from '@/router'


const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">
        {useRoutes(router)}
      </div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App
