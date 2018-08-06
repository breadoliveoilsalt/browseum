import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt } from '../actions/getRandomArtActions'
import { navigationButtonClicked } from '../actions/navigationActions'
import { getFavorites, resetFavorites } from '../actions/retreiveFavoritesActions'
import { postUpdate, updateSessionObjects } from '../actions/persistenceActions'

import ErrorMessage from '../components/ErrorMessage'
import TopLevelButton from '../components/TopLevelButton'
import ArtViewAndNavigation from '../components/ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.getRandomArt()
    }
  }

// Upto : now change button based on whether it's a favorite or not

  // This works as of 180806 334pm
  addToFavoritesClicked = (id, event) => {
    Promise.resolve(this.props.postUpdate(id, {favorite: true}))
      .then( () => this.props.updateSessionObjects(id, {favorite: true}))
      .then( () => this.props.getFavorites())
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
            addToFavoritesClicked={this.addToFavoritesClicked}
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

// can change all of these to () => dispatch format and then get rid of bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return {
      getRandomArt: () => dispatch(getRandomArt()),
      navigationButtonClicked: (type, errorMessage) => dispatch(navigationButtonClicked(type, errorMessage)),
      getFavorites: () => dispatch(getFavorites()),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      resetFavorites: (data) => dispatch(resetFavorites(data)),
      updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
