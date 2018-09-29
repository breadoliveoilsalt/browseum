import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import TitleHeader from '../components/TitleHeader'
import NavBar from '../components/NavBar'

import Home from '../components/Home'
import ArtContainer from './ArtContainer'
import FavoritesContainer from './FavoritesContainer'
import HistoryContainer from './HistoryContainer'

class Layout extends Component {

  render() {
    return (
      <BrowserRouter>

        <Container>

            <TitleHeader />

            <NavBar />

            <Switch>
              <Route exact strict path="/" component={Home} />
              <Route exact strict path="/art" component={ArtContainer} />
              <Route exact strict path="/favorites" component={FavoritesContainer} />
              <Route exact strict path="/history" component={HistoryContainer} />
            </Switch>

        </ Container>

      </BrowserRouter>
    )
  }
}

export default Layout
