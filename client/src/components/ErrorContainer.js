import React from 'react'

import { Grid, Message, Container } from 'semantic-ui-react'

const ErrorContainer = ({error}) => {

  if (error.errorOccurred) {
    return (
      <Grid stackable>
        <Grid.Row centered className="errorMessage">
          <Grid.Column width={16}>
            <Message negative>
              <Container textAlign='center' className='bold'> {error.errorMessage} </Container>
            </Message>
          </ Grid.Column>
        </ Grid.Row>
      </Grid>
    )
  }
  else {
    return null
  }
}

export default ErrorContainer
