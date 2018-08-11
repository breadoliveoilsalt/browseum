import React from 'react'

import { Button } from 'semantic-ui-react'

const FavoriteButton = ( {text, action, id} ) => (

      <Button
        size='tiny'
        content={ text }
        onClick={ (event) => action(id, event) } />

)

export default FavoriteButton
