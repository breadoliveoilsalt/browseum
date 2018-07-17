import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'

import { Button, Grid } from 'semantic-ui-react'



class MainRandomButton extends Component {

  render(){
    return(
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Button fluid onClick={this.props.mainRandomButtonClicked}> Browse Random Art! </Button>
        </ Grid.Column>
      </Grid.Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch)}
}

export default connect(null, mapDispatchToProps)(MainRandomButton)
