import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/:id' component={Detail} />
    </BrowserRouter>
  )
}

export default Router
