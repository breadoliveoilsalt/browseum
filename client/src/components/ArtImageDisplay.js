import React, {Component} from 'react'
import { Segment, Image, Dimmer, Loader } from 'semantic-ui-react'

class ArtImageDisplay extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showLoader: true
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.source !== prevProps.source) {
      this.setState({
        showLoader: true
      })
    }
  }

  handleImageLoad = () => {
    this.setState({
      showLoader: false
    })
  }

  render() {

    return (
      <Segment basic >
        <Dimmer className={ this.state.showLoader ? "active" : null } >
          <Loader size="small" />
        </Dimmer>
        <Image src={this.props.source} onLoad={this.handleImageLoad} size="large" centered />
      </ Segment>
    )

  }
}

export default ArtImageDisplay
