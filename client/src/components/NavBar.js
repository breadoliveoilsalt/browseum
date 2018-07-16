import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends Component {

// taking away "basic" makes it look inverted like I want

  render() {
    return (
      <div>

        <Link to='/' exact style={{color:'black'}}>
          <Button
            name='home'
            basic={false}
            color={'black'} >
            Home
          </Button>
        </Link>

        <Link to='/art' exact style={{color:'black'}}>
          <Button
            name='art'
            basic={true}
            color={'black'}>
             Browse Art
          </Button>
        </Link>

        <Link to='/favorites' exact style={{color:'black'}}>
          <Button
            name='favorites'
            basic={true}
            color={'black'}>
             Favorites
          </Button>
        </Link>

        <Link to='/history' exact style={{color:'black'}}>
          <Button
            name='history'
            basic={true}
            color={'black'}>
            Browsing History
          </Button>
        </Link>
      </div>

    )
  }
}

export default NavBar
