import React, { Component } from 'react'

import TopLevelButton from '../components/TopLevelButton'
import HistoryList from '../components/HistoryList'


class HistoryContainer extends Component {

  // <Grid stackable >
  //
  // </Grid>

  render() {
    return (
      <div>

        <TopLevelButton
          buttonText={"Get All History"}
        />

        <HistoryList
          source={"Source is either sessionHistory or allHistory"}
        />

      </div>

    )
  }

}

export default HistoryContainer
