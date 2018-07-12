import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import TestComponent from './TestComponent'
import TestAbout from './TestAbout'
import TestHelp from './TestHelp'
import TestThunk from './TestThunk'

import TestImage from './TestImage'

class MainViewWindow extends Component {

  render() {
    return(
      <Switch>
        <Route exact path="/" component={TestComponent}/>
        <Route exact path="/about" component={TestAbout} />
        <Route exact path="/help" component={TestImage} />
        <Route exact path="/testthunkclient" component={TestThunk} />
      </Switch>
    )

  }
}

export default MainViewWindow
