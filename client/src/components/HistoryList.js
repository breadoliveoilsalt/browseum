import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


const HistoryList = ( {source} ) => {

  const listRows = source.map( (e, i) => {
    return e.title
      // need a Row for each, with two columns -- one for History item and one for date viewed

  })

  return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={16} >
            You made it to HistoryList.
            This will render a bunch of HistoryItems.
            {listRows}
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}


export default HistoryList
