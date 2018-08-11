import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const MandatoryInfoSegment = ( {
  field,
  title,
  buttonText,
  buttonCondition,
  navigationButtonClicked,
  type,
  errorMessage
} ) => {

    const segmentButton = (
      <Segment align='center' basic>
        <Button size='tiny' onClick={() => navigationButtonClicked(type, errorMessage)}> {buttonText} </Button>
      </Segment>
    )

    return (
      <div>

        <Segment>
          <span className="bold"> {title}: </span> {field ? field : "Unknown"}
        </Segment>

        { buttonCondition ? segmentButton : null}

      </div>
    )

}

export default MandatoryInfoSegment
