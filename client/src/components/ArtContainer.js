import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mainRandomButtonClicked } from '../actions/basicArtObjectActions'
import { getArtistButtonClicked } from '../actions/getArtistActions'

import { Grid } from 'semantic-ui-react'

import MainRandomButton from './MainRandomButton'
import ArtViewAndNavigation from './ArtViewAndNavigation'

class ArtContainer extends Component {

  componentDidMount() {
    if (!this.props.currentArtObject.objectAPIId) {
      this.props.mainRandomButtonClicked()
    }
  }

  render() {
    return (
      <Grid stackable>

        <MainRandomButton mainRandomButtonClicked={this.props.mainRandomButtonClicked}/>

        <ArtViewAndNavigation
            currentArtObject={this.props.currentArtObject}
            getArtistButtonClicked={this.props.getArtistButtonClicked}

          />

      </Grid>
    )
  }

}
const mapStateToProps = (state) => {
  return { currentArtObject: state.currentArtObject }
}

const mapDispatchToProps = (dispatch) => {
  return {
      mainRandomButtonClicked: bindActionCreators(mainRandomButtonClicked, dispatch),
      getArtistButtonClicked: bindActionCreators(getArtistButtonClicked, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)
