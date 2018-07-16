import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class FavoritesContainer extends Component {

  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          You made it to favorites.
        </ Grid.Column>
      </ Grid.Row>
    )
  }

}

export default FavoritesContainer
