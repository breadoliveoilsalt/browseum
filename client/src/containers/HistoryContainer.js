import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from 'semantic-ui-react'

// Should be something like sessonHelperActions, no?
import { loadCurrentArtObject, addToSessionHistory, updateLastViewed } from '../actions/helperActions'
import { removeError } from '../actions/errorActions'

import { postInitialObjectData, postUpdateToLastViewed } from '../actions/persistenceActions'
import { retreive30DayHistory, resetExtendedHistory } from '../actions/retreiveHistoryActions'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'

class HistoryContainer extends Component {

    // The goal here is to ensure that if the user navigates to /history,
    // the user sees the sessionHistory, regardless of whether the user has previously clicked
    // the button to get the extended history. Effectively, every time the user navigates away from
    // /history after requesting extended history, the extendedHistory state is reset.  Thanks to the
    // conditional rendering below, the user then sees only the sessionHistory.
    // I went this path to avoid making requests to the Rails API DB everytime a user visits /history.
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
    this.props.postUpdateToLastViewed(updatedObject.id, updatedObject.lastViewed)
    this.props.loadCurrentArtObject(updatedObject)
    this.props.addToSessionHistory(updatedObject)
    this.props.removeError()
      // this.props.history is available b/c this component is a direct child of a <Route>. {withRouter} is not needed
    this.props.history.push("/art")
  }

  render() {

    const extendedHistoryRequested = !(this.props.extendedHistory.length === 0)

    if (!extendedHistoryRequested) {
      return (
        <div className="margin-fix">

          <Header
            as='h2'
            textAlign='center'
            className="underlined"
            content="Browsing History from This Session"
          />

          <TopLevelButton
            buttonText={"See History from the Last 30 Days"}
            action={this.props.retreive30DayHistory}
            />

          <HistoryList
            source={this.props.sessionHistory.slice(0).reverse()}
            historyLinkClicked={this.historyLinkClicked}
          />

        </div>
      )
    } else {
      return (
        <div className="margin-fix">

          <Header
            as='h2'
            textAlign='center'
            className="underlined"
            content="Browsing History from the Last 30 Days"
          />

          <HistoryList
            source={this.props.extendedHistory.slice(0).reverse()}
            historyLinkClicked={this.historyLinkClicked}
          />

        </div>
      )
    }
  }
}

// Remember I can remove some old stuff here, like currentArtObject, and error probably

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
      postUpdateToLastViewed: (id) => dispatch(postUpdateToLastViewed(id)),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      postInitialObjectData: (data) => dispatch(postInitialObjectData(data)),
      retreive30DayHistory: () => dispatch(retreive30DayHistory()),
      resetExtendedHistory: () => dispatch(resetExtendedHistory())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
