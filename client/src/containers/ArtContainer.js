import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt, navigationButtonClicked } from '../actions/harvardApiThunks'

import { postUpdate, updateSessionObjects } from '../actions/serverApiThunks'
import { addToStateFavorites, removeFromStateFavorites, loadCurrentArtObject } from '../actions/basicActionCreators'

import ErrorMessage from '../components/ErrorMessage'
import TopLevelButton from '../components/TopLevelButton'
import ArtViewAndNavigation from '../components/ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectApiId) {
      this.props.getRandomArt()
    }
  }

  addToFavoritesClicked = (object, event) => {
    event.preventDefault()
      // Need this otherwise entry for reducer not quite work for some reason:
    const updatedObject = Object.assign({}, object)
    updatedObject.favorite = true
    this.props.loadCurrentArtObject(updatedObject)
    this.props.addToStateFavorites(updatedObject)
    this.props.updateSessionObjects(updatedObject.id, {favorite: true})
    this.props.postUpdate(updatedObject.id, {favorite: true})
  }

  removeFromFavoritesClicked = (object, event) => {
    event.preventDefault()
      // Need this otherwise entry for reducer not quite work for some reason:
    const updatedObject = Object.assign({}, object)
    updatedObject.favorite = false
    this.props.loadCurrentArtObject(updatedObject)
    this.props.removeFromStateFavorites(updatedObject.id)
    this.props.updateSessionObjects(updatedObject.id, {favorite: false})
    this.props.postUpdate(updatedObject.id, {favorite: false})
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
            removeFromFavoritesClicked={this.removeFromFavoritesClicked}
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
      addToStateFavorites: (object) => dispatch(addToStateFavorites(object)),
      removeFromStateFavorites: (id) => dispatch(removeFromStateFavorites(id)),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
