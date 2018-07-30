import React from 'react'

import { Grid, Message, Container } from 'semantic-ui-react'

const ErrorMessage = ({errorMessage}) => {

    return (
      <Grid stackable>
        <Grid.Row centered className="errorMessage">
          <Grid.Column width={16}>
            <Message negative>
              <Container textAlign='center' className='bold'> {errorMessage} </Container>
            </Message>
          </ Grid.Column>
        </ Grid.Row>
      </Grid>
    )

}

export default ErrorMessage
