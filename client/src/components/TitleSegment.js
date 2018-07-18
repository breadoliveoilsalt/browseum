import React from 'react'

import { Segment, Button } from 'semantic-ui-react'

const TitleSegment = (props) => (

    <div>
      <Segment>
        <span className="bold"> Title: </span> {props.title}
      </Segment>
      <Segment align='center' basic>
        <Button size='tiny'> Add to Favorites </Button>
      </Segment>
    </div>

)

export default TitleSegment
