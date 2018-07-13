import fetch from 'isomorphic-fetch'


// I can probably put these under mainRandomButtonClicked
const baseURL = 'https://api.harvardartmuseums.org/object'

const paramsString = '?apikey=' + process.env.REACT_APP_API_KEY + '&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'


export function mainRandomButtonClicked() {

  // console.log("You clicked the button, son!", process.env)

  return function(dispatch){
    return fetch(baseURL + paramsString)
      .then(response => response.json())
      .then(response => response.records[0])
      .then(record => {
        if (!record.primaryimageurl) {
          console.log("Retreived invalid record")
          mainRandomButtonClicked()
        }
        else {
          console.log("Retreived valid record")
          console.log(record)
          dispatch(loadCurrentArtObject(record))
        }
      })
    }
  }


function loadCurrentArtObject(record) {
  return ({
    type: 'LOAD_ART_OBJECT',
    payload: record
  })
}
