import React, { Component } from 'react'
import { Grid, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HistoryList = ( {source, historyLinkClicked} ) => {

  const listRows = source.map( (object, i) => {
    return (
      <Table.Row>
        <Table.Cell width={10}>
            <Link to='/art' className='link-formatting' onClick={(event) => historyLinkClicked(object, event)}> {object.title} </Link>
        </Table.Cell>

        <Table.Cell width={6}>
          {object.dateViewed.toLocaleString()}
        </Table.Cell>

      </Table.Row>

    )

  })

  return (
      <Grid>
        <Grid.Row centered>
          <Table stackable celled striped>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center' width={10}>Artwork Title</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' width={6}>Date Viewed (Reverse Chronological Order)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>


            <Table.Body>
              {listRows}
            </Table.Body>
          </Table>

        </Grid.Row>
      </Grid>
  )
}


export default HistoryList
