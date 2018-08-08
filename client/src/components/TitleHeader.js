import React from 'react'
import { Header, Grid } from 'semantic-ui-react'

const TitleHeader = () => (

  <Grid stackable>
    <Grid.Row centered>
      <Header
        as='h1'
        content='Browseum' 
      />
    </Grid.Row>
  </Grid>

)

export default TitleHeader
