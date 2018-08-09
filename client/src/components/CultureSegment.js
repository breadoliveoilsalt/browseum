import React from 'react'

import { Segment, Button } from 'semantic-ui-react'

const CultureSegment = ( {currentArtObject, navigationButtonClicked} ) => {

  const segmentButton = (
    <Segment align='center' basic>
      <Button size='tiny' onClick={() => navigationButtonClicked("culture", "Sorry, the query is returning no further records from that culture. Please try another button.")}> Look for more from this culture </Button>
    </Segment>
  )

  return (
    <div>

      <Segment>
        <span className="bold"> Culture: </span> {currentArtObject.culture ? currentArtObject.culture : "Unassigned"}
      </Segment>

      { currentArtObject.culture ? segmentButton : null}

    </div>
  )

}
export default CultureSegment
