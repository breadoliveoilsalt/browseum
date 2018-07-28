import React from 'react'

import { Segment, Button } from 'semantic-ui-react'

const DatedSegment = ( {currentArtObject, navigationButtonClicked} ) => {

  const segmentButton = [
    <Segment align='center' basic>
      <Button size='tiny' onClick={() => navigationButtonClicked("date", "Sorry, there are no more records available from that time period.")}> Look for more from this time period </Button>
    </Segment>
  ]


  return (
    <div>
      <Segment>
        <span className="bold"> Dated: </span> {currentArtObject.dated ? currentArtObject.dated : "Undated"}
      </Segment>

      { currentArtObject.century ? segmentButton: null}
    </div>
  )

}
export default DatedSegment
