import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from 'semantic-ui-react'

import { loadCurrentArtObject, addToSessionHistory } from '../actions/helperActions'
import { removeError } from '../actions/errorActions'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

  historyLinkClicked = (object) => {
    console.log("link clicked!")
    console.log("Object:", object)
    this.props.removeError()
    this.props.loadCurrentArtObject(object)
    this.props.addToSessionHistory(object)
  }

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
          action={() => console.log("Get history button clicked")}
        />

        <HistoryList
          source={reverseHistory}
          historyLinkClicked={this.historyLinkClicked}
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
      removeError: dispatch(removeError()),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
