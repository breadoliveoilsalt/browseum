import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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

            // TN: <Route/>s are basically saying: change what's here,
            // in this location where the component renders, depending
            // on what the URL is.
          <Switch>
            <Route exact path="/" component={TestComponent} />
            <Route exact path="/about" component={TestAbout} />
            <Route exact path="/help" component={TestHelp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
