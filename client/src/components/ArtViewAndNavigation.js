import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

import ArtistSegment from './ArtistSegment'
import TitleSegment from './TitleSegment'
import DatedSegment from './DatedSegment'
import CultureSegment from './CultureSegment'
import OptionalSegment from './OptionalSegment'

// ArtInfoSegment -- source={currentArtObject.somthing} optional={true} boldText={} plainText={} searchButton={true} searchButtonTitle={}
// searchButtonFunction={} altText={"Unattributed"}


const ArtViewAndNavigation = (props) => {

  return (
      <Grid.Row>
        <Grid.Column width={10}>
          <Image src={props.currentArtObject.primaryimageurl} size='large' centered />
        </Grid.Column>

        <Grid.Column width={6}>
            <TitleSegment title={props.currentArtObject.title} />

            <ArtistSegment
              artist={props.currentArtObject.artist}
              artistAPIId={props.currentArtObject.artistAPIId}
              getArtistButtonClicked={props.getArtistButtonClicked} />

            <DatedSegment dated={props.currentArtObject.dated} />
            <CultureSegment culture={props.currentArtObject.culture} />

            <OptionalSegment
              field={props.currentArtObject.medium}
              title={"Medium"}
              text={props.currentArtObject.medium} />

            <OptionalSegment
              field={props.currentArtObject.description}
              title={"Short Description"}
              text={props.currentArtObject.description} />

            <OptionalSegment
              field={props.currentArtObject.labeltext}
              title={"Wall Label Text"}
              text={props.currentArtObject.labeltext} />

            <OptionalSegment
              field={props.currentArtObject.commentary}
              title={"Commentary"}
              text={props.currentArtObject.commentary} />

        </Grid.Column>
      </Grid.Row>
    )
}

export default ArtViewAndNavigation
