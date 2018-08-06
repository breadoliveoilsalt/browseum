import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Grid } from 'semantic-ui-react'

class FavoritesContainer extends Component {

  render() {
    return (
      <div className="margin-fix">
          You made it to favorites.
      </div>
    )
  }

}

// favorites button ={true}

const mapStateToProps = (state) => {
  return {
    currentArtObject: state.currentArtObject,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // getFavorites: () => dispatch(getFavorites()),
      // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      // resetFavorites: (data) => dispatch(resetFavorites(data)),
      // updateSessionObjects: (id, data) => dispatch(updateSessionObjects(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)
