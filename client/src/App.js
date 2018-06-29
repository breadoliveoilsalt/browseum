import React, { Component } from 'react';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">

        <p> Here is the stuff in the testReducer default state: </p>

        <p> {this.props.tester}</p>

        <p> Note that this requires using mapStateToProps and html portion to use
        this.props.tester </p>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tester: state.tester };
};

export default connect(mapStateToProps)(App)

// export default App;
