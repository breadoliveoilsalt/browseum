import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

class SecondaryViewWindow extends Component {

  render() {
    return (
      <div>

        <p> <span className="bold"> Title: </span> {this.props.currentArtObject.title ?     this.props.currentArtObject.title : "Untitled"} </p>

        <p> <span className="bold"> Artist: </span> {this.props.currentArtObject.author ? this.props.currentArtObject.author : "Unattributed" } </p>

        {this.props.currentArtObject.medium ? <p> <span className="bold"> Medium: </span> {this.props.currentArtObject.medium} </p> : ""}

        <p> <span className="bold"> Dated: </span> {this.props.currentArtObject.dated ? this.props.currentArtObject.dated : "Undated" }  </p>

        {this.props.currentArtObject.culture ? <p> <span className="bold"> Culture: </span> {this.props.currentArtObject.culture} </p> : null}

        {this.props.currentArtObject.description ? <p> <span className="bold"> Short Description: </span> {this.props.currentArtObject.description} </p> : null}

        {this.props.currentArtObject.labeltext ? <p> <span className="bold"> Wall Label Text: </span> {this.props.currentArtObject.labeltext} </p> : null}

        {this.props.currentArtObject.commentary ? <p> <span className="bold"> Commentary: </span> {this.props.currentArtObject.commentary} </p> : null}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { currentArtObject: state.currentArtObject }
}

export default connect(mapStateToProps)(SecondaryViewWindow)
