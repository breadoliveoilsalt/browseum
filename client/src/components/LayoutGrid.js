import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Top from './Top'
import NavBar from './NavBar'

// import MainRandomButton from './MainRandomButton'
// import MainViewWindow from './MainViewWindow'
// import SecondaryViewWindow from './SecondaryViewWindow'

import Home from './Home'
import ArtContainers from './ArtContainers'
import FavoritesContainer from './FavoritesContainer'
import HistoryContainer from './HistoryContainer'

class LayoutGrid extends Component {

  render() {
    return (

      <Container>
        <Grid stackable celled>

          <Grid.Row>
            <Grid.Column width={16}>
              <Top />
            </ Grid.Column >
          </ Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <NavBar />
            </ Grid.Column >
          </ Grid.Row>

          <Switch>
            {/* Does not work to be able to pass match etc down: <Route path="/" component={NavBar} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/art" component={ArtContainers} />
            <Route exact path="/favorites" component={FavoritesContainer} />
            <Route exact path="/history" component={HistoryContainer} />
          </Switch>

        </ Grid>

      </ Container>

    )
  }
}

export default LayoutGrid
