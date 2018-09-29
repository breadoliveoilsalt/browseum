import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from 'semantic-ui-react'

import { postUpdate, updateSessionObjects } from '../actions/serverApiThunks'
import { removeError, loadCurrentArtObject, addToSessionHistory, removeFromStateFavorites } from '../actions/basicActionCreators'

import FavoritesList from '../components/FavoritesList'

class FavoritesContainer extends Component {

  removeFromFavoritesClickedFavoritesPage = (id, event) => {
    event.preventDefault()
    this.props.removeFromStateFavorites(id)
    this.props.updateSessionObjects(id, {favorite: false})
    this.props.postUpdate(id, {favorite: false})
  }

  historyLinkClicked = (object, event) => {
    event.preventDefault()
      // Need this otherwise the prior sessionHistory entry gets an updated lastViewed as well for some reason:
    const updatedObject = Object.assign({}, object)
    updatedObject.lastViewed = new Date()
    this.props.postUpdate(updatedObject.id, {lastViewed: updatedObject.lastViewed})
    this.props.loadCurrentArtObject(updatedObject)
    this.props.addToSessionHistory(updatedObject)
    if (this.props.error.errorOccurred) {
      this.props.removeError()
    }
      // this.props.history is available b/c this component is a direct child of a <Route>. {withRouter} is not needed:
    this.props.history.push("/art")
  }

  render() {
    return (
      <div className="margin-fix">

        <Header
          as="h2"
          textAlign="center"
          className="underlined"
          content="Favorites"
        />

        <FavoritesList
          source={this.props.favorites}
          historyLinkClicked={this.historyLinkClicked}
          removeFromFavoritesClicked={this.removeFromFavoritesClickedFavoritesPage}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data)),
      removeFromStateFavorites: (id) => dispatch(removeFromStateFavorites(id)),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      removeError: () => dispatch(removeError()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
