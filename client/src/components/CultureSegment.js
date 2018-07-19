import React from 'react'

import { Segment, Button } from 'semantic-ui-react'

const CultureSegment = (props) => {

  const segmentButton = [
    <Segment align='center' basic>
      <Button size='tiny'> Look for more from this culture </Button>
    </Segment>
  ]

  return (
    <div>

      <Segment>
        <span className="bold"> Culture: </span> {props.culture ? props.culture : "Unassigned"}
      </Segment>

      { props.culture ? segmentButton : null}

    </div>
  )

}
export default CultureSegment
