import fetch from 'isomorphic-fetch'

export function retreive30DayHistory() {
  return function(dispatch) {
    console.log("About to fetch")
    return fetch('/api/artobjects')
    .then(res => res.json())
    .then(res => console.log("Fetch response:", res))
  }
}
