////  copied ////


import fetch from 'isomorphic-fetch'

export function retreive30DayHistory() {
  return function(dispatch) {
    console.log("About to fetch")
    return fetch('/api/artobjects')
    .then(res => res.json())
    .then(res => {
      dispatch(loadExtendedHistory(res))
    })
  }
}

function loadExtendedHistory(records) {
  return ({
    type: 'LOAD_EXTENDED_HISTORY',
    payload: records
  })
}


export function resetExtendedHistory() {
  return ({
    type: 'RESET_EXTENDED_HISTORY'
  })
}
