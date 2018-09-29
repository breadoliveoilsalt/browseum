import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt, navigationButtonClicked } from '../actions/harvardApiThunks'

import { postUpdate, updateSessionObjects } from '../actions/serverApiThunks'
import { addToStateFavorites, removeFromStateFavorites, loadCurrentArtObject, changeCurrentArtObjectFavoriteStatus } from '../actions/basicActionCreators'

import ErrorMessage from '../components/ErrorMessage'
import TopLevelButton from '../components/TopLevelButton'
import ArtViewAndNavigation from '../components/ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.getRandomArt()
    }
  }

  addToFavoritesClicked = (id, event) => {
    event.preventDefault()
    this.props.changeCurrentArtObjectFavoriteStatus(true)
      // Can't just do addToStateFavorites(currentArtObject). Need the two lines below, otherwise,
      // the object loaded into the Redux favorites state has a favorites property of false!
    const updatedCOA = Object.assign({}, this.props.currentArtObject, {favorite: true})
    this.props.addToStateFavorites(updatedCOA)
    this.props.updateSessionObjects(id, {favorite: true})
    this.props.postUpdate(id, {favorite: true})
  }

    // This depends on passing currentArtObject down the line to the function
  // addToFavoritesClicked = (object, event) => {
  //   event.preventDefault()
  //     // Need this otherwise entry for reducer not quite work for some reason:
  //   const updatedObject = Object.assign({}, object)
  //   updatedObject.favorite = true
  //   this.props.loadCurrentArtObject(updatedObject)
  //   this.props.addToStateFavorites(updatedObject)
  //   this.props.updateSessionObjects(updatedObject.id, {favorite: true})
  //   this.props.postUpdate(updatedObject.id, {favorite: true})
  // }

  removeFromFavoritesClickedArtPage = (id, event) => {
    event.preventDefault()
    this.props.changeCurrentArtObjectFavoriteStatus(false)
    this.props.removeFromStateFavorites(id)
    this.props.updateSessionObjects(id, {favorite: false})
    this.props.postUpdate(id, {favorite: false})
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
      changeCurrentArtObjectFavoriteStatus: (bool) => dispatch(changeCurrentArtObjectFavoriteStatus(bool)),
      addToStateFavorites: (object) => dispatch(addToStateFavorites(object)),
      removeFromStateFavorites: (id) => dispatch(removeFromStateFavorites(id)),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
