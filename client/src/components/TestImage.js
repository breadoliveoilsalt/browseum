import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'


class TestImage extends Component {

  render() {
    return (
      <Image src={this.props.currentArtObject.primaryimageurl} size='large' centered />
    )
  }
}

//
// const TestImage = () => {
//   return <Image src={this.props.currentArtObject.primaryimageurl} size='medium' centered />
// }


const mapStateToProps = (state) => {
  return { currentArtObject: state.currentArtObject }
}

export default connect(mapStateToProps)(TestImage)
