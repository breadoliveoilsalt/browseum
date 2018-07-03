import React, { Component } from 'react'
import { connect } from 'react-redux'
import addWord from '../actions/addWordToTestState'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addThisWord(this.state.text)
    this.setState({
      text: ''})
  }

  render() {

    // I probably could map this instead to the STATE here, and link state to the tester...that's probably better
    const listOfTestWords = this.props.tester.map((word, index) => <p key={index}> {index +1}. {word} </p>)

    return (
      <div className="App">

        <p> Here is the stuff in the testReducer default state: </p>

        {listOfTestWords}

        <p> Note that this requires using mapStateToProps and html portion to use
        this.props.tester </p>

        <p> Add something to the testReducer state here: </p>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}/> <br/>
          <input type="submit" value= "Add Word to testReducer!"/>
        </form>

      </div>
    );
  }
}

// Below says that App.props.tester links to state.tester (ie, the store)
// so I can then call this.props.tester.getState()
const mapStateToProps = (state) => {
  return { tester: state.tester };
}

// Below says that App.props.addThisWord(word) is now a function that
// calls dispatch and so adds to the Store.  It does this relying on the
// addWord action, which I imported above.
// I think in the future I'd like addWord to be addWordAC (for Action Creator)
const mapDispatchToProps = (dispatch) => {
  return { addThisWord: (word) => {dispatch(addWord(word))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
