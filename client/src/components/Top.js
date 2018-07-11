import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'


class Top extends Component {

  render() {
    return (
      <Container>
        <Grid columns={1} >
          <Grid.Row>
            <Grid.Column>
              <Header as='h1'> Browseum </Header>
            </ Grid.Column >
          </ Grid.Row>
        </Grid>
      </ Container>
    )
  }
}


export default Top
