import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFavorites } from '../actions/serverApiThunks'

import Layout from './Layout'

class LayoutParent extends Component {

  componentDidMount() {
    this.props.getFavorites()
  }

  render() {
    return (
        <Layout />
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      getFavorites: () => dispatch(getFavorites())
  }
}

export default connect(null, mapDispatchToProps)(LayoutParent)
