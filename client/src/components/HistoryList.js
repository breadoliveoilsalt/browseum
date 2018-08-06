import React, { Component } from 'react'
import { Grid, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HistoryList = ( {source, historyLinkClicked} ) => {


  const headerRow =
      <Table.Row>
          <Table.HeaderCell width={10} textAlign='center'>Artwork Title</Table.HeaderCell>
          <Table.HeaderCell width={6} textAlign='center'>Last Viewed (Reverse Chronological Order)</Table.HeaderCell>
      </Table.Row>

  const listRows = source.map( (object, i) => {
    return (
      <Table.Row>
        <Table.Cell width={10} textAlign='center'>
            <Link to='/art' className='link-formatting' onClick={(event) => historyLinkClicked(object, event)}> {object.title} </Link>
        </Table.Cell>

        <Table.Cell width={6} textAlign='center'>
          {typeof object.lastViewed === "string" ? new Date(object.lastViewed).toLocaleString() : object.lastViewed.toLocaleString()}
        </Table.Cell>
      </Table.Row>
    )
  })

  return (
      <Grid>
        <Grid.Row centered>
          <Table stackable celled striped>

            <Table.Header>
              {headerRow}
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
