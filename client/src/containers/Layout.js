import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Top from '../components/Top'
import NavBar from '../components/NavBar'

import Home from '../components/Home'
import ArtContainer from './ArtContainer'
import FavoritesContainer from './FavoritesContainer'
import HistoryContainer from './HistoryContainer'

class Layout extends Component {

  render() {
    return (

      <Container>

          <Top />

          <NavBar />

          <Switch>
            {/* Does not work to be able to pass match etc down: <Route path="/" component={NavBar} /> */}
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/art" component={ArtContainer} />
            <Route exact strict path="/favorites" component={FavoritesContainer} />
            <Route exact strict path="/history" component={HistoryContainer} />
          </Switch>

      </ Container>

    )
  }
}

export default Layout
