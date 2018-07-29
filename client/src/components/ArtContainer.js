import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'
import { getArtistButtonClicked } from '../actions/getArtistActions'
import { navigationButtonClicked } from '../actions/navigationActions'

import { Grid } from 'semantic-ui-react'

import ErrorContainer from './ErrorContainer'
import MainRandomButton from './MainRandomButton'
import ArtViewAndNavigation from './ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.mainRandomButtonClicked()
    }
  }

  render() {
    return (
      <Grid stackable>

        <ErrorContainer error={this.props.error} />

        <MainRandomButton mainRandomButtonClicked={this.props.mainRandomButtonClicked}/>

        <ArtViewAndNavigation
            currentArtObject={this.props.currentArtObject}
            getArtistButtonClicked={this.props.getArtistButtonClicked}
            navigationButtonClicked={this.props.navigationButtonClicked}

          />

      </Grid>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    currentArtObject: state.currentArtObject,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch),
      getArtistButtonClicked: bindActionCreators(getArtistButtonClicked, dispatch),
      navigationButtonClicked: bindActionCreators(navigationButtonClicked, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
