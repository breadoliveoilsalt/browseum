import React from 'react'

import { Button } from 'semantic-ui-react'

// Rem - I moved "fluid" from original draft below
const FavoriteButton = ({text, action, id}) => (

      <Button
        size='tiny'
        content={ text }
        onClick={ (event) => action(id, event) } />

)

export default FavoriteButton
