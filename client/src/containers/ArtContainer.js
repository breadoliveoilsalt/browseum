import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt, navigationButtonClicked } from '../actions/harvardApiThunks'
import { postUpdate, updateSessionObjects, getFavorites } from '../actions/serverApiThunks'

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
    Promise.resolve(this.props.postUpdate(id, {favorite: true}))
      .then( () => this.props.updateSessionObjects(id, {favorite: true}))
      .then( () => this.props.getFavorites())
  }

  removeFromFavoritesClicked = (id, event) => {
    Promise.resolve(this.props.postUpdate(id, {favorite: false}))
      .then( () => this.props.updateSessionObjects(id, {favorite: false}))
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
      getFavorites: () => dispatch(getFavorites()),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
