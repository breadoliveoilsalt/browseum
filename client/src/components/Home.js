import React, { Component } from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (

        <Grid.Row >
          <Grid.Column width={16} >

              <Header as='h2' textAlign='center' className="underlined"> Welcome to Browseum </Header>

              <Container text>
                <p>
                  Want to sift leisurely through pieces of famous art? Browseum has you covered. It randomly selects and displays artwork from the Harvard Art Museums.
                </p>

                <p>
                  Click "Browse Art" to get started. Don't like what you see? Hit a "Get New Art!" button to render a completely different piece of art.
                </p>

                <p>
                  Like what you see? Feel free to add it to your favorites. Or, at the click of a button, see if other random artwork is available from the artist, or from the artist's time period or culture.
                </p>

                <p>
                  Enjoy!
                </p>
              </Container>
          </ Grid.Column>
        </ Grid.Row>
      )

  }

}

export default Home
