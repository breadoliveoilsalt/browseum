import React from 'react'
import {Segment, Button} from 'semantic-ui-react'

const ArtistSegment = (props) => {

  const getArtistArt = props.getArtistButtonClicked

  return (

      <div>
        <Segment>
          <span className="bold"> Artist: </span> {props.artist}
        </ Segment>

        <Segment align='center' basic>
          <Button size='tiny' onClick={ () => getArtistArt() }>
            Look for more by this artist
          </Button>
        </Segment>
      </div>
  )

}
export default ArtistSegment
