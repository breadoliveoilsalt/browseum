import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getRandomArt } from '../actions/getRandomArtActions'
import { navigationButtonClicked } from '../actions/navigationActions'
import { getFavorites, resetFavorites } from '../actions/retreiveFavoritesActions'
import { postUpdate } from '../actions/persistenceActions'

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
      .then( () => this.props.getFavorites())
  }

// The problem may be with getFavorites
// This was the beginning of something starting to work...then I stopped?
  // addToFavoritesClicked = (id, event) => {
  //   Promise.resolve(this.props.postUpdate(id, {favorite: true}))
  //   .then( () => this.props.getFavorites())
  //   .then((res) => console.log("addToFavoritesClicked res", res))}

  //
  // addToFavoritesClicked = (id, event) => {
  //   return new Promise(this.props.postUpdate(id, {favorite: true}))
  //   .then( () => this.props.getFavorites())}


// This works but I do not get a "res" in the then
  // addToFavoritesClicked = (id, event) => {
  //   return new Promise(resolve => {
  //     const update = this.props.postUpdate(id, {favorite: true})
  //     resolve(update)})
  //   .then(res => console.log("Promise Resolution:", res))}

// How am I going to update in the current session...It doesn't matter...

    // return new Promise( (resolve, reject) => {
    //   const updateStatus = this.props.postUpdate(id, {favorite: true})
    //   // if (updateStatus.status === 200) {
    //     resolve(updateStatus)
    //   // }
    // // this.props.getFavorites()
    // })
    // .then(res => console.log(res))}

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
      getRandomArt: bindActionCreators(getRandomArt, dispatch),
      navigationButtonClicked: bindActionCreators(navigationButtonClicked, dispatch),
      getFavorites: () => dispatch(getFavorites()),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      resetFavorites: (data) => dispatch(resetFavorites(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
