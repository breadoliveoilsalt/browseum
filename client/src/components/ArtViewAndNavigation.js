import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

const ArtViewAndNavigation = (props) => (

  <Grid.Row>
    <Grid.Column width={10}>
      <Image src={props.imageSource} size='large' centered />
    </Grid.Column>

    <Grid.Column width={6}>
      Column 2
    </Grid.Column>
  </Grid.Row>

)

export default ArtViewAndNavigation
