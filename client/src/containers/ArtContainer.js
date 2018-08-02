import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getRandomArt } from '../actions/getRandomArtActions'
import { navigationButtonClicked } from '../actions/navigationActions'

import ErrorMessage from '../components/ErrorMessage'
import TopLevelButton from '../components/TopLevelButton'
import ArtViewAndNavigation from '../components/ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.getRandomArt()
    }
  }

  render() {
    return (

      <div className="margin-fix">

        {this.props.error.errorOccurred ? <ErrorMessage errorMessage={this.props.error.errorMessage} /> : null }

        <TopLevelButton
            buttonText={"Get New Art!"}
            action={this.props.getRandomArt}
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
      getRandomArt: bindActionCreators(getRandomArt, dispatch),
      navigationButtonClicked: bindActionCreators(navigationButtonClicked, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
