import React from 'react'

import { Segment, Button } from 'semantic-ui-react'
import FavoriteButton from './FavoriteButton'

const TitleSegment = (props) => (

    <div>
      <Segment>
        <span className="bold"> Title: </span> {props.title}
      </Segment>

      <Segment align='center' basic>
        <FavoriteButton
          text={"Add to Favorites"}
          action={props.addToFavoritesClicked}
          id={props.id}
        />
      </Segment>

    </div>

)

export default TitleSegment
