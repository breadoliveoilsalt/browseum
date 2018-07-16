import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class ArtContainers extends Component {

  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          You made it to Art.
        </ Grid.Column>
      </ Grid.Row>
    )
  }

}

export default ArtContainers
