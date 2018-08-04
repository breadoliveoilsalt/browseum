import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
  // withRouter is needd to access history and push() below:
import { withRouter } from 'react-router-dom'

import { Header } from 'semantic-ui-react'

import { loadCurrentArtObject, addToSessionHistory, updateLastViewed} from '../actions/helperActions'
import { removeError } from '../actions/errorActions'

import { postInitialObjectData } from '../actions/persistenceActions'
import { retreive30DayHistory } from '../actions/retreivalActions'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

  historyLinkClicked = (object, event) => {
    event.preventDefault()
      // Need this otherwise the prior sessionHistory entry gets an updated lastViewed as well for some reason
    const updatedObject = Object.assign({}, object)
    updatedObject.lastViewed = new Date
    // I will probably need to add here something that updates the view in the DB...another action to Post a fetch update
    this.props.loadCurrentArtObject(updatedObject)
    this.props.addToSessionHistory(updatedObject)
    this.props.removeError()
    this.props.history.push("/art")
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
          action={this.props.retreive30DayHistory}
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
      removeError: () => dispatch(removeError()),
      updateLastViewed: () => dispatch(updateLastViewed()),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      postInitialObjectData: (data) => dispatch(postInitialObjectData(data)),
      retreive30DayHistory: () => dispatch(retreive30DayHistory())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
