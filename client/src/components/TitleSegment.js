import React from 'react'

import { Segment } from 'semantic-ui-react'
import FavoriteButton from './FavoriteButton'

const TitleSegment = ( {id, title, favorited, addToFavoritesClicked, removeFromFavoritesClicked} ) => (

    <div>
      <Segment>
        <span className="bold"> Title: </span> {title}
      </Segment>

      <Segment align='center' basic>
        <FavoriteButton
          text={favorited ? "Remove from Favorites" : "Add to Favorites"}
          action={favorited ? removeFromFavoritesClicked : addToFavoritesClicked}
          id={id}
        />
      </Segment>

    </div>

)

export default TitleSegment
