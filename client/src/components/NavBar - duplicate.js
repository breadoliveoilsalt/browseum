import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends Component {


// taking away "basic" makes it look inverted like I want

  // const router = window.location.href.split('/').last
  // console.log(router)

  render() {

    console.log("NavBar props:", this.props)

    return (
      <div>

        <NavLink to='/' exact style={{color:'black'}} activeClassName='basic'>
          <Button activeClassName='basic'
            name='home'
            color={'black'} >
            Home
          </Button>
        </NavLink>

        <NavLink to='/art' exact style={{color:'black'}}>
          <Button
            name='art'
            basic={false}
            color={'black'}>
             Browse Art
          </Button>
        </NavLink>

        <NavLink to='/favorites' exact style={{color:'black'}}>
          <Button
            name='favorites'
            basic={false}
            color={'black'}>
             Favorites
          </Button>
        </NavLink>

        <NavLink to='/history' exact style={{color:'black'}}>
          <Button
            name='history'
            basic={false}
            color={'black'}>
            Browsing History
          </Button>
        </NavLink>
      </div>

    )
  }
}

export default NavBar
