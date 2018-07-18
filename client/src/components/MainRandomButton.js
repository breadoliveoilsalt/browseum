import React from 'react'

import { Button, Grid } from 'semantic-ui-react'

const MainRandomButton = ({mainRandomButtonClicked}) => (

    <Grid.Row centered className="margin-fix">
      <Grid.Column width={6}>
        <Button fluid onClick={mainRandomButtonClicked}> Get New Art! </Button>
      </ Grid.Column>
    </ Grid.Row>
)

export default MainRandomButton
