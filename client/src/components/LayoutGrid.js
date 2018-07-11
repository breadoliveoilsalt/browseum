import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

import Top from './Top'
import NavBar from './NavBar'
import MainRandomButton from './MainRandomButton'
import ViewWindow from './ViewWindow'


class LayoutGrid extends Component {

  render() {
    return (

      <Container>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Top />
            </ Grid.Column >
          </ Grid.Row>

          <Grid.Row>
            <Grid.Column width={12}>
              <NavBar />
            </ Grid.Column >

            <Grid.Column width={4}>
              <MainRandomButton />
            </ Grid.Column >
          </ Grid.Row>

          <Grid.Row>
            <Grid.Column width={12}>
              <ViewWindow />
            </ Grid.Column >

            <Grid.Column width={4}>
              <MainRandomButton />
            </ Grid.Column >
          </ Grid.Row>

        </Grid>

      </ Container>

    )
  }
}

export default LayoutGrid
