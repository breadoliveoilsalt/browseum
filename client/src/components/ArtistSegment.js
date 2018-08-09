import React from 'react'
import {Segment, Button} from 'semantic-ui-react'

const ArtistSegment = ( {currentArtObject, navigationButtonClicked}) => {

    const segmentButton = (
      <Segment align='center' basic>
        <Button size='tiny' onClick={() => navigationButtonClicked("artist", "Sorry, the query is returning no further records from that artist. Please try another button.")}> Look for more by this artist </Button>
      </Segment>
    )

    return (
      <div>

        <Segment>
          <span className="bold"> Artist: </span> {currentArtObject.artist ? currentArtObject.artist : "Unknown Artist"}
        </Segment>

        { currentArtObject.artist ? segmentButton : null}

      </div>
    )

}

export default ArtistSegment
