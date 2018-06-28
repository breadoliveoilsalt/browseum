import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// NB:
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">

        Here is the stuff in the testReducer default state:

        {this.props.tester}

        Note that this requires using mapStateToProps and html portion to use
        this.props.tester

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tester: state.tester };
};

export default connect(mapStateToProps)(App)

// export default App;
