import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from 'semantic-ui-react'

import { loadCurrentArtObject, addToSessionHistory, updateLastViewed } from '../actions/helperActions'
import { removeError } from '../actions/errorActions'

import { postInitialObjectData } from '../actions/persistenceActions'
import { retreive30DayHistory, resetExtendedHistory } from '../actions/retreiveHistoryActions'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

    // A bit verbose, but this adds a listener to ensure that if the user navigates to /history,
    // the user sees the sessionHistory, regardless of whether the user has previously clicked
    // the button to get the extended history. 
  constructor(props) {
    super(props)
    this.props.history.listen((location, action) => {
      if (this.props.extendedHistory.length !== 0) {
        this.props.resetExtendedHistory()
      }
    })
  }

  historyLinkClicked = (object, event) => {
    event.preventDefault()
      // Need this otherwise the prior sessionHistory entry gets an updated lastViewed as well for some reason
    const updatedObject = Object.assign({}, object)
    updatedObject.lastViewed = new Date
    // I will probably need to add here something that updates the view in the DB...another action to Post a fetch update
    this.props.loadCurrentArtObject(updatedObject)
    this.props.addToSessionHistory(updatedObject)
    this.props.removeError()
      // this.props.history is available b/c this component is a direct child of a <Route>.
      // {withRouter} is not needed
    this.props.history.push("/art")
  }

  render() {

    const reverseHistory = this.props.extendedHistory.length === 0 ? this.props.sessionHistory.slice(0).reverse() : this.props.extendedHistory.slice(0).reverse()

    return (
      <div className="margin-fix">

        <Header
          as='h2'
          textAlign='center'
          className="underlined"
          content="Browsing History"
        />

        <TopLevelButton
          buttonText={"See History from the Last 30 Days"}
          action={this.props.retreive30DayHistory}
        />

        <TopLevelButton
          buttonText={"Clear extended history"}
          action={this.props.resetExtendedHistory}
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
    sessionHistory: state.sessionHistory,
    extendedHistory: state.extendedHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeError: () => dispatch(removeError()),
      updateLastViewed: () => dispatch(updateLastViewed()),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      postInitialObjectData: (data) => dispatch(postInitialObjectData(data)),
      retreive30DayHistory: () => dispatch(retreive30DayHistory()),
      resetExtendedHistory: () => dispatch(resetExtendedHistory())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
