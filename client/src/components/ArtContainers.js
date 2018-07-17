import React, { Component } from 'react'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'

import { Grid, Container } from 'semantic-ui-react'

import MainRandomButton from './MainRandomButton'
import ArtViewAndNavigation from './ArtViewAndNavigation'

class ArtContainers extends Component {

  render() {
    return (
      <Grid celled>
        <MainRandomButton mainRandomButtonClicked={this.props.mainRandomButtonClicked}/>
        <ArtViewAndNavigation />
      </Grid>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return { mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch)}
}

export default connect(null, mapDispatchToProps)(ArtContainers)
