import React from 'react'

import { Segment } from 'semantic-ui-react'

const OptionalSegment = (props) => {

  if (props.field) {
    return (
      <div>
        <Segment>
          <span className="bold"> {props.title}: </span> {props.text}
        </Segment>
      </div>
    )
  }
  else {
    return null
  }
}

export default OptionalSegment
