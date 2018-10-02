import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt, navigationButtonClicked } from '../actions/harvardApiThunks'

// delete unused stuff
import { postUpdate, updateSessionObjects, postFavoriteUpdateArtPage } from '../actions/serverApiThunks'
import { addToStateFavorites, removeFromStateFavorites, changeCurrentArtObjectFavoriteStatus } from '../actions/basicActionCreators'

import ErrorMessage from '../components/ErrorMessage'
import TopLevelButton from '../components/TopLevelButton'
import ArtViewAndNavigation from '../components/ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.getRandomArt()
    }
  }

  addToFavoritesClickedArtPage = (id, event) => {
    event.preventDefault()
    this.props.postFavoriteUpdateArtPage(id, {favorite: true})
  }

  removeFromFavoritesClickedArtPage = (id, event) => {
    event.preventDefault()
    this.props.postFavoriteUpdateArtPage(id, {favorite: false})
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
            addToFavoritesClicked={this.addToFavoritesClickedArtPage}
            removeFromFavoritesClicked={this.removeFromFavoritesClickedArtPage}
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
      getRandomArt: () => dispatch(getRandomArt()),
      navigationButtonClicked: (type, errorMessage) => dispatch(navigationButtonClicked(type, errorMessage)),
      postFavoriteUpdateArtPage: (id, data) => dispatch(postFavoriteUpdateArtPage(id, data)),
      // changeCurrentArtObjectFavoriteStatus: (bool) => dispatch(changeCurrentArtObjectFavoriteStatus(bool)),
      // addToStateFavorites: (object) => dispatch(addToStateFavorites(object)),
      // removeFromStateFavorites: (id) => dispatch(removeFromStateFavorites(id)),
      // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      // updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
