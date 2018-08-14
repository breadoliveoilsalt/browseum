import React from 'react'

import { Segment } from 'semantic-ui-react'

const OptionalSegment = ( {field, title, text} ) => {

  if (field) {
    return (
      <div>
        <Segment>
          <span className="bold"> {title}: </span> {text}
        </Segment>
      </div>
    )
  }
  else {
    return null
  }
}

export default OptionalSegment
