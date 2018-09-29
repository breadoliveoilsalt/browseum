import React from 'react'

import { Grid } from 'semantic-ui-react'

import ArtImageDisplay from './ArtImageDisplay'
import TitleAndFavoriteSegment from './TitleAndFavoriteSegment'
import MandatoryInfoSegment from './MandatoryInfoSegment'
import OptionalInfoSegment from './OptionalInfoSegment'

const ArtViewAndNavigation = ( {currentArtObject, navigationButtonClicked, addToFavoritesClicked, removeFromFavoritesClicked} ) => {

  return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={10}>
              <ArtImageDisplay source={currentArtObject.primaryImageUrl} />
          </Grid.Column>

          <Grid.Column width={6}>
              <TitleAndFavoriteSegment
                title={currentArtObject.title}
                currentArtObject={currentArtObject}
                favorited={currentArtObject.favorite}
                addToFavoritesClicked={addToFavoritesClicked}
                removeFromFavoritesClicked={removeFromFavoritesClicked}
              />

              <MandatoryInfoSegment
                field={currentArtObject.artist}
                title={"Artist"}
                buttonText={"Look for more by this artist"}
                buttonCondition={currentArtObject.artist}
                navigationButtonClicked={navigationButtonClicked}
                type={"artist"}
                errorMessage={"Sorry, the query is returning no further records from that artist. Please try another button."}
              />

              <MandatoryInfoSegment
                field={currentArtObject.dated}
                title={"Dated"}
                buttonText={"Look for more from this time period"}
                buttonCondition={currentArtObject.century}
                navigationButtonClicked={navigationButtonClicked}
                type={"date"}
                errorMessage={"Sorry, the query is returning no further records from that time period. Please try another button."}
              />

              <MandatoryInfoSegment
                field={currentArtObject.culture}
                title={"Culture"}
                buttonText={"Look for more from this culture"}
                buttonCondition={currentArtObject.culture}
                navigationButtonClicked={navigationButtonClicked}
                type={"culture"}
                errorMessage={"Sorry, the query is returning no further records from that culture. Please try another button."}
              />

              <OptionalInfoSegment
                field={currentArtObject.medium}
                title={"Medium"}
                text={currentArtObject.medium} />

              <OptionalInfoSegment
                field={currentArtObject.description}
                title={"Short Description"}
                text={currentArtObject.description} />

              <OptionalInfoSegment
                field={currentArtObject.labelText}
                title={"Wall Label Text"}
                text={currentArtObject.labelText} />

              <OptionalInfoSegment
                field={currentArtObject.commentary}
                title={"Commentary"}
                text={currentArtObject.commentary} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default ArtViewAndNavigation
