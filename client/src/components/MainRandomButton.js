import React, { Component } from 'react'

import { Button, Grid } from 'semantic-ui-react'

class MainRandomButton extends Component {

    render() {

      console.log("Props:", this.props)

      return (
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Button fluid onClick={this.props.mainRandomButtonClicked}> Get New Art! </Button>
          </ Grid.Column>
        </Grid.Row>
      )
}
}

export default MainRandomButton
