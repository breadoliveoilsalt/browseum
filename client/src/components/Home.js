import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div>
        <Container>
          <Grid.Column width={16} >
            You made it home.
            </ Grid.Column>
        </ Container>
      </div>
    )
  }

}

export default Home
