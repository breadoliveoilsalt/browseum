import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import TestComponent from './components/TestComponent'
import TestNavBar from './components/TestNavBar'
import TestAbout from './components/TestAbout'
import TestHelp from './components/TestHelp'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <TestNavBar />
          <Route exact path="/" component={TestComponent} />
          <Route exact path="/about" component={TestAbout} />
          <Route exact path="/help" component={TestHelp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
