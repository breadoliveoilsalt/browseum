import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

  render() {

    const reverseHistory = this.props.sessionHistory.slice(0).reverse()

    return (
      <div>

        <TopLevelButton
          buttonText={"Get All History"}
        />

        <HistoryList
          source={reverseHistory}
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


export default connect(mapStateToProps)(HistoryContainer)
