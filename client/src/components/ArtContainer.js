import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'
import { navigationButtonClicked } from '../actions/navigationActions'

import { Grid } from 'semantic-ui-react'

import ErrorContainer from './ErrorContainer'
import TopLevelButton from './TopLevelButton'
import ArtViewAndNavigation from './ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.mainRandomButtonClicked()
    }
  }

  render() {
    return (

      <div>
        <ErrorContainer error={this.props.error} />

        <TopLevelButton
            buttonText={"Get New Art!"}
            action={this.props.mainRandomButtonClicked}
        />

        <ArtViewAndNavigation
            currentArtObject={this.props.currentArtObject}
            navigationButtonClicked={this.props.navigationButtonClicked}
        />
      </div>
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
      navigationButtonClicked: bindActionCreators(navigationButtonClicked, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
