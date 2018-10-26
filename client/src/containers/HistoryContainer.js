import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from 'semantic-ui-react'

import { removeError, loadCurrentArtObject, addToSessionHistory, resetExtendedHistory } from '../actions/basicActionCreators'
import { postUpdate, get30DayHistory } from '../actions/serverApiThunks'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'
//
class HistoryContainer extends Component {

    // The goal with the constructor below is to ensure that if the user navigates to /history,
    // the user sees the sessionHistory, regardless of whether the user has previously clicked
    // the button to get the extended history. Effectively, every time the user navigates away from
    // /history after requesting extended history, the extendedHistory state is reset to an empty array.
    // Thanks to the conditional rendering below, the user then sees only the sessionHistory
    // when revisiting /history.  I went this path to experiment and avoid making requests to the
    // Rails API DB everytime a user visits /history.
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

    const extendedHistoryRequested = !(this.props.extendedHistory.length === 0)

    if (!extendedHistoryRequested) {
      return (
        <div className="margin-fix">

          <Header
            as='h2'
            textAlign='center'
            className="underlined"
            content="This Session's Browsing History"
          />

          <TopLevelButton
            buttonText={"See Art Viewed During the Last 30 Days"}
            action={this.props.get30DayHistory}
            />

          <HistoryList
            source={this.props.sessionHistory.slice().reverse()}
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
            content="Art Viewed During the Last 30 Days"
          />

          <HistoryList
            source={this.props.extendedHistory}
            historyLinkClicked={this.historyLinkClicked}
          />

        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    sessionHistory: state.sessionHistory,
    extendedHistory: state.extendedHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeError: () => dispatch(removeError()),
      postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      get30DayHistory: () => dispatch(get30DayHistory()),
      resetExtendedHistory: () => dispatch(resetExtendedHistory())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
