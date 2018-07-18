import React from 'react'

import ArtistSegment from './ArtistSegment'
import { Grid, Image, Segment, Button } from 'semantic-ui-react'

const ArtViewAndNavigation = (props) => {

  const titleSegment =
    [<Segment> <span className="bold"> Title: </span> {props.currentArtObject.title ?     props.currentArtObject.title : "Untitled"} </Segment>]

  const datedSegment =
    [<Segment> <span className="bold"> Dated: </span> {props.currentArtObject.dated ? props.currentArtObject.dated : "Undated" }  </Segment>]

    // Maybe distinguish bw mandatory and optional segments

  const mediumSegment =
    [props.currentArtObject.medium ? <Segment> <span className="bold"> Medium: </span> {props.currentArtObject.medium} </Segment> : null]

  const cultureSegment =
    [props.currentArtObject.culture ? <Segment> <span className="bold"> Culture: </span> {props.currentArtObject.culture} </Segment> : null]

  const descriptionSegment =
    [props.currentArtObject.description ? <Segment> <span className="bold"> Short Description: </span> {props.currentArtObject.description} </Segment> : null]

  const labeltextSegment =
    [props.currentArtObject.labeltext ? <Segment> <span className="bold"> Wall Label Text: </span> {props.currentArtObject.labeltext} </Segment> : null]

  const commentarySegment =
    [props.currentArtObject.commentary ? <Segment> <span className="bold"> Commentary: </span> {props.currentArtObject.commentary} </Segment> : null]


  return (
      <Grid.Row>
        <Grid.Column width={10}>
          <Image src={props.imageSource} size='large' centered />
        </Grid.Column>

        <Grid.Column width={6}>
            {titleSegment}
            <ArtistSegment artist={props.currentArtObject.artist} />
            {datedSegment}
            {mediumSegment}
            {cultureSegment}
            {descriptionSegment}
            {labeltextSegment}
            {commentarySegment}
        </Grid.Column>
      </Grid.Row>
    )
}

// Consider Segments for the buttons
export default ArtViewAndNavigation
