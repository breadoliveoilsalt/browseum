import React, { Component } from 'react'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'

import { Grid } from 'semantic-ui-react'

import MainRandomButton from './MainRandomButton'

class ArtContainers extends Component {

  render() {
    return (
      <MainRandomButton mainRandomButtonClicked={this.props.mainRandomButtonClicked}/>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return { mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch)}
}

export default connect(null, mapDispatchToProps)(ArtContainers)
