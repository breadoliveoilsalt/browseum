import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'

const NavBar = () => (

    <Grid stackable >
      <Grid.Row centered>
        <Button as={NavLink} to='/' exact basic activeStyle={{basic: false}}> Home </Button>
        <Button as={NavLink} to='/art' exact basic activeStyle={{basic: false}}> Browse Art </Button>
        <Button as={NavLink} to='/favorites' exact basic activeStyle={{basic: false}}> Favorites </Button>
        <Button as={NavLink} to='/history' exact basic activeStyle={{basic: false}}> Browsing History </Button>
      </Grid.Row>
    </Grid>
  )


export default NavBar
