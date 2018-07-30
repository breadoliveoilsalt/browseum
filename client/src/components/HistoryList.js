import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


const HistoryList = (props) => {

  return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16} >
            You made it to HistoryList.
            This will render a bunch of HistoryItems.
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}


export default HistoryList
