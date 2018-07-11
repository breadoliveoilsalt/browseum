import React, { Component } from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'


class Header extends Component {

  render() {
    return (
      <Container>
        <Grid columns={1} >
          <Grid.Row border='black'>
            <Grid.Column color='red'>
              <Icon name='deaf' /> This is the header
            </ Grid.Column >
          </ Grid.Row>
        </Grid>
      </ Container>
    )
  }
}


export default Header
