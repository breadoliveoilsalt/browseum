import React from 'react'

import { Grid } from 'semantic-ui-react'

const ErrorContainer = ({error}) => {

  if (error.errorOccurred) {
    return (
      <Grid.Row centered className="margin-fix">
        <Grid.Column width={6}>
          <p> You got an error! </p>
        </ Grid.Column>
      </ Grid.Row>
    )
  }
  else {
    return null
  }
}


export default ErrorContainer
