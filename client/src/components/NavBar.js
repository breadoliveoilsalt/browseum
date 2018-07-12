import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends Component {


  render() {
    return (
      <div>

        <Link to='/about' exact style={{color:'black'}}>
          <Button basic color={'black'} >
            About
          </Button>
        </Link>

        <Link to='/help' exact style={{color:'black'}}>
          <Button basic color={'black'}>
             Favorites
          </Button>
        </Link>

        <Link to='/testthunkclient' exact style={{color:'black'}}>
          <Button basic color={'black'}>
            Browsing History
          </Button>
        </Link>
      </div>

    )
  }
}

export default NavBar
