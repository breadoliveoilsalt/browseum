import React, { Component } from 'react'
import { connect } from 'react-redux'

import LayoutParent from './containers/LayoutParent'

class App extends Component {


  render() {

    return (
        <div className="App">
          <LayoutParent/>
        </div>

    );
  }
}

export default App
