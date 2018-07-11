import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends Component {


  render() {
    return (
      <div>

        <Button basic color={'black'} >
          <Link to='/about' exact style={{color:'black'}}> About </Link>
        </Button>

        <Button basic color={'black'}>
            <Link to='/help' exact style={{color:'black'}}> Favorites </Link>
        </Button>

        <Button basic color={'black'}>
          <Link to='/testthunkclient' exact style={{color:'black'}}> Browsing History </Link>
        </Button>

      </div>

    )
  }
}

export default NavBar
