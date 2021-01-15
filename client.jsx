/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Faculties from './components/Faculties'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Faculties} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
