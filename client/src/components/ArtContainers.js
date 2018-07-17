import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MainRandomButton from './MainRandomButton'

class ArtContainers extends Component {

  // DOES NOT WORK; MESSES WITH THE FORMATTING.
  // THE SMALLEST COMPONENT IS THE ONE THAT HAS TO HAVE THE GRID.ROW
  // YOU CAN HAVE ONE GRID ROW WITH MANY COLUMNS.
  // ANOTHER WAY TO PUT IT: EACH GRID ROW HAS TO BE ITS OWN COMPONENT.
  // <div>
  //   <Grid.Row>
  //     This is the first row
  //   </Grid.Row>
  //
  //   <Grid.Row>
  //     <Grid.Column width={10}>
  //       You made it to Art. This is column 1.
  //     </ Grid.Column>
  //
  //     <Grid.Column width={6}>
  //       This is column 2.
  //     </ Grid.Column>
  //
  //   </ Grid.Row>
  // </div>

  render() {
    return (

      <MainRandomButton />

    )
  }

}

export default ArtContainers
