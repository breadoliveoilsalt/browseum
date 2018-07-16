import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16} >
            You made it home.
        </ Grid.Column>
      </ Grid.Row>
    )
  }

}

export default Home
