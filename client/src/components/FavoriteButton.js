import React from 'react'

import { Button } from 'semantic-ui-react'

// Rem - I moved "fluid" from original draft below
const FavoriteButton = ({text, action}) => (

      <Button
        size='tiny'
        content={ text }
        onClick={ () => action() } />

)

export default FavoriteButton
