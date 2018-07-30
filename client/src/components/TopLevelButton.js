import React from 'react'

import { Button, Grid } from 'semantic-ui-react'

const TopLevelButton = ({buttonText, action}) => (

  <Grid stackable>
    <Grid.Row centered className="margin-fix">
      <Grid.Column width={6}>
        <Button fluid onClick={() => action()}> {buttonText} </Button>
      </ Grid.Column>
    </ Grid.Row>
  </Grid>
)

export default TopLevelButton
