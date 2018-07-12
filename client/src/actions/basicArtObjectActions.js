import fetch from 'isomorphic-fetch'

const baseURL = 'https://api.harvardartmuseums.org/object'

const paramsString = '?apikey=' + process.env.REACT_APP_API_KEY + '&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'


export function mainRandomButtonClicked() {

  // console.log("You clicked the button, son!", process.env)


  fetch(baseURL + paramsString)
  .then(response => response.json())
  .then(response => response.records[0])
  .then(record => {
    if (!record.primaryimageurl) {
      console.log("Retreived invalid record")
      mainRandomButtonClicked()
    }
    else {
      console.log("Retreived valid record")
      console.log("Here's the url:", record.primaryimageurl)
    }
  })


  // return function(dispatch) {
  //   return fetch(baseURL + paramsString)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  // }
}
