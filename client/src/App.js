import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
