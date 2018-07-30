import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from 'semantic-ui-react'

import { loadCurrentArtObject } from '../actions/helperActions'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

  render() {

    const reverseHistory = this.props.sessionHistory.slice(0).reverse()

    return (
      <div className="margin-fix">

        <Header
          as='h2'
          textAlign='center'
          className="underlined"
          content="Browsing History"
        />

        <TopLevelButton
          buttonText={"Get All History"}
        />

        <HistoryList
          source={reverseHistory}
          loadCurrentArtObject={this.props.loadCurrentArtObject}
        />

      </div>

    )
  }

}


const mapStateToProps = (state) => {
  return {
    currentArtObject: state.currentArtObject,
    error: state.error,
    sessionHistory: state.sessionHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadCurrentArtObject: bindActionCreators(loadCurrentArtObject, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
