import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import {mainRandomButtonClicked} from '../actions/basicArtObjectActions'

import { Button } from 'semantic-ui-react'



class MainRandomButton extends Component {


  render(){
    // debugger
    return(
      <div>
        <Button fluid onClick={this.props.mainRandomButtonClicked}> Browse Random Art! </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch)}
}

export default connect(mapDispatchToProps)(MainRandomButton)
