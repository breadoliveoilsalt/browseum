import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'

import { Grid } from 'semantic-ui-react'

import MainRandomButton from './MainRandomButton'
import ArtViewAndNavigation from './ArtViewAndNavigation'

class ArtContainers extends Component {

  render() {
    return (
      <Grid celled>
        <MainRandomButton mainRandomButtonClicked={this.props.mainRandomButtonClicked}/>
        <ArtViewAndNavigation imageSource={this.props.currentArtObject.primaryimageurl}/>
      </Grid>
    )
  }

}
const mapStateToProps = (state) => {
  return { currentArtObject: state.currentArtObject }
}

const mapDispatchToProps = (dispatch) => {
  return { mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainers)
