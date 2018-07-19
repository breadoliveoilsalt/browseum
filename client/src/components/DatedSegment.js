import React from 'react'

import { Segment, Button } from 'semantic-ui-react'

const DatedSegment = (props) => {

  const segmentButton = [
    <Segment align='center' basic>
      <Button size='tiny'> Look for more from this time period </Button>
    </Segment>
  ]


  return (
    <div>
      <Segment>
        <span className="bold"> Dated: </span> {props.dated ? props.dated : "Undated"}
      </Segment>

      { props.dated ? segmentButton: null}
    </div>
  )

}
export default DatedSegment
