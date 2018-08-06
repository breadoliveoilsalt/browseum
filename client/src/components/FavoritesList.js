import React, { Component } from 'react'
import { Grid, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import FavoriteButton from './FavoriteButton'

const FavoritesList = ( {source, historyLinkClicked, removeFromFavoritesClicked} ) => {

  console.log("props", source, historyLinkClicked, removeFromFavoritesClicked)

  const headerRow =
      <Table.Row>
          <Table.HeaderCell width={8} textAlign='center'>Artwork Title</Table.HeaderCell>
          <Table.HeaderCell width={4} textAlign='center'>Last Viewed (Reverse Chronological Order)</Table.HeaderCell>
          <Table.HeaderCell width={4} textAlign='center'>Remove Button</Table.HeaderCell>
      </Table.Row>

  const listRows = source.map( (object, i) => {
    return (
      <Table.Row>
        <Table.Cell width={8} textAlign='center'>
            <Link to='/art' className='link-formatting' onClick={(event) => historyLinkClicked(object, event)}> {object.title} </Link>
        </Table.Cell>

        <Table.Cell width={4} textAlign='center'>
          {typeof object.lastViewed === "string" ? new Date(object.lastViewed).toLocaleString() : object.lastViewed.toLocaleString()}
        </Table.Cell>

        <Table.Cell width={4} textAlign='center'>
            <FavoriteButton
              id={object.id}
              text={"Remove from Favorites"}
              action={removeFromFavoritesClicked}
            />

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


export default FavoritesList
