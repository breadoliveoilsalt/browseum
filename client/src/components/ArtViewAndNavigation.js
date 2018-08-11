import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

import TitleAndFavoriteSegment from './TitleAndFavoriteSegment'
import MandatoryInfoSegment from './MandatoryInfoSegment'
import OptionalInfoSegment from './OptionalInfoSegment'

const ArtViewAndNavigation = (props) => {

  return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={10}>
              <Image src={props.currentArtObject.primaryImageUrl} size='large' centered />
          </Grid.Column>

          <Grid.Column width={6}>
              <TitleAndFavoriteSegment
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

              <MandatoryInfoSegment
                field={props.currentArtObject.culture}
                title={"Culture"}
                buttonText={"Look for more from this culture"}
                buttonCondition={props.currentArtObject.culture}
                navigationButtonClicked={props.navigationButtonClicked}
                type={"culture"}
                errorMessage={"Sorry, the query is returning no further records from that culture. Please try another button."}
              />

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
