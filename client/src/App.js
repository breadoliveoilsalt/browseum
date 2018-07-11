import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TestComponent from './components/TestComponent'
import TestNavBar from './components/TestNavBar'
import TestAbout from './components/TestAbout'
import TestHelp from './components/TestHelp'
import TestThunk from './components/TestThunk'

import LayoutGrid from './components/LayoutGrid'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <LayoutGrid/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
