import React from 'react'

import { Button } from 'semantic-ui-react'

const FavoriteButton = ( {text, action, currentArtObject} ) => (

      <Button
        size='tiny'
        content={ text }
        onClick={ (event) => action(currentArtObject, event) } />

)

export default FavoriteButton
