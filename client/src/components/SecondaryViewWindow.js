import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

class SecondaryViewWindow extends Component {

  render() {
    return (
      <div>
        <p> <span className="bold"> Title: </span> {this.props.currentArtObject.title} </p>

        <p> <span className="bold"> Artist: </span> {this.props.currentArtObject.author} </p>

        <p> <span className="bold"> Medium: </span> {this.props.currentArtObject.medium} </p>

        <p> <span className="bold"> Dated: </span> {this.props.currentArtObject.dated} </p>

        <p> <span className="bold"> Culture: </span> {this.props.currentArtObject.culture} </p>

        <p> <span className="bold"> Description: </span> {this.props.currentArtObject.description} </p>

        <p> <span className="bold"> Label Text: </span> {this.props.currentArtObject.labeltext} </p>

        <p> <span className="bold"> Commentary: </span> {this.props.currentArtObject.commentary} </p>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { currentArtObject: state.currentArtObject }
}

export default connect(mapStateToProps)(SecondaryViewWindow)
