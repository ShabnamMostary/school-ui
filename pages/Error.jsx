import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import GoBack from '../components/GoBack'
import Title from '../components/Title'

export default () => (
  <Page>
    <Title />
    <GoBack />
    <NotFound message="Sorry, unable to find the page you are looking for." />
  </Page>
)
