import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

import TitleSegment from './TitleSegment'
import MandatoryInfoSegment from './MandatoryInfoSegment'
import OptionalInfoSegment from './OptionalInfoSegment'
// import ArtistSegment from './ArtistSegment'

// import DatedSegment from './DatedSegment'
import CultureSegment from './CultureSegment'


// ArtInfoSegment -- source={currentArtObject.somthing} optional={true} boldText={} plainText={} searchButton={true} searchButtonTitle={}Info
// searchButtonFunction={} altText={"Unattributed"}

// consider just passing currentArtObject into the various mandatory Segments...eg, in ArtistSegment, delete all the crap not used.
//
// Notes on DatedSegment:
// {/* can't just have this -- need full object to test century and get dated info -- dated={props.currentArtObject.dated} */}
// {/* buttonConditionedOn */}
// need a buttonLabel, category (title)
// altText if there is no key
//
// <ArtistSegment
//   currentArtObject={props.currentArtObject}
//   navigationButtonClicked={props.navigationButtonClicked}
// />
//
// <DatedSegment
//   currentArtObject={props.currentArtObject}
//   navigationButtonClicked={props.navigationButtonClicked}
// />

// Maybe make the image a component that can show a loader
const ArtViewAndNavigation = (props) => {

  return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={10}>
              <Image src={props.currentArtObject.primaryImageUrl} size='large' centered />
          </Grid.Column>

          <Grid.Column width={6}>
              <TitleSegment
                title={props.currentArtObject.title}
                id={props.currentArtObject.id}
                favorited={props.currentArtObject.favorite}
                addToFavoritesClicked={props.addToFavoritesClicked}
                removeFromFavoritesClicked={props.removeFromFavoritesClicked}
              />

              <MandatoryInfoSegment
                field={props.currentArtObject.artist}
                title={"Artist"}
                buttonText={"Look for more by this artist"}
                buttonCondition={props.currentArtObject.artist}
                navigationButtonClicked={props.navigationButtonClicked}
                type={"artist"}
                errorMessage={"Sorry, the query is returning no further records from that artist. Please try another button."}
              />

              <MandatoryInfoSegment
                field={props.currentArtObject.dated}
                title={"Dated"}
                buttonText={"Look for more from this time period"}
                buttonCondition={props.currentArtObject.century}
                navigationButtonClicked={props.navigationButtonClicked}
                type={"date"}
                errorMessage={"Sorry, the query is returning no further records from that time period. Please try another button."}
              />


              <CultureSegment
                currentArtObject={props.currentArtObject}
                navigationButtonClicked={props.navigationButtonClicked}/>

              <OptionalInfoSegment
                field={props.currentArtObject.medium}
                title={"Medium"}
                text={props.currentArtObject.medium} />

              <OptionalInfoSegment
                field={props.currentArtObject.description}
                title={"Short Description"}
                text={props.currentArtObject.description} />

              <OptionalInfoSegment
                field={props.currentArtObject.labelText}
                title={"Wall Label Text"}
                text={props.currentArtObject.labelText} />

              <OptionalInfoSegment
                field={props.currentArtObject.commentary}
                title={"Commentary"}
                text={props.currentArtObject.commentary} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default ArtViewAndNavigation
