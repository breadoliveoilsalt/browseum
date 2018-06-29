import React, { Component } from 'react';
import { connect } from 'react-redux';
import addWord from '../actions/addWordToTestState'

class App extends Component {

  render() {

    console.log(addWord)

    const listOfTestWords = this.props.tester.map((word, index) => <p key={index}> {word} </p>)

    return (
      <div className="App">

        <p> Here is the stuff in the testReducer default state: </p>

        {listOfTestWords}

        <p> Note that this requires using mapStateToProps and html portion to use
        this.props.tester </p>

        {/* <form>
          <input type="text" />
          <button/>
        </form> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tester: state.tester };
};

export default connect(mapStateToProps)(App)

// export default App;
