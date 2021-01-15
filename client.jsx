/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FacultyPage from './pages/Faculties'
import ErrorPage from './pages/Error'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={FacultyPage} />
    <Route path="*" component={ErrorPage} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
