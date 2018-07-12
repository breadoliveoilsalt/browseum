import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

import Top from './Top'
import NavBar from './NavBar'
import MainRandomButton from './MainRandomButton'
import MainViewWindow from './MainViewWindow'
import SecondaryViewWindow from './SecondaryViewWindow'


class LayoutGrid extends Component {

  render() {
    return (

      <Container>
        <Grid stackable >
          <Grid.Row>
            <Grid.Column width={16}>
              <Top />
            </ Grid.Column >
          </ Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <NavBar />
            </ Grid.Column >

            <Grid.Column width={6}>
              <MainRandomButton />
            </ Grid.Column >
          </ Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <MainViewWindow />
            </ Grid.Column >

            <Grid.Column width={6}>
              <SecondaryViewWindow/>
            </ Grid.Column >
          </ Grid.Row>

        </Grid>

      </ Container>

    )
  }
}

export default LayoutGrid
