import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getRandomArt, navigationButtonClicked } from '../actions/harvardApiThunks'

import { postFavoriteUpdate } from '../actions/serverApiThunks'

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
    this.props.postFavoriteUpdate(id, {favorite: true})
  }

  removeFromFavoritesClicked = (id, event) => {
    event.preventDefault()
    this.props.postFavoriteUpdate(id, {favorite: false})
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
      postFavoriteUpdate: (id, data) => dispatch(postFavoriteUpdate(id, data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
