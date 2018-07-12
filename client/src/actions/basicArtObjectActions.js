import fetch from 'isomorphic-fetch'

const baseURL = 'https://api.harvardartmuseums.org/object'

const paramsString = '?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'


export function mainRandomButtonClicked() {

  console.log("You clicked the button, son!", process.env)


  fetch(baseURL + paramsString)
  .then(response => response.json())
  .then(response => console.log(response))

  // return function(dispatch) {
  //   return fetch(baseURL, {
  //     method: 'GET',
  //     body: 'apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'
  //   })
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  // }
}
