function currentArtObjectReducer(
  state =
    {
      primaryimageurl: null,
      objectAPIId: null,
      title: null,
      author: null,
      authorAPIId: null,
      medium: null,
      dated: null,
      period: null,
      periodAPIId: null,
      culture: null,
      labeltext: null,
      description: null,
      commentary: null,
      classificationAPIId: null,
      dateViewed: null,
      favorite: false,
      requestMade: false,
      validDataRetreived: null,
      errorWithDataRetrieval: {
        error: null,
        errorMessage: null
      }
    },

  action) {


  switch (action.type) {

    case 'REQUEST_ART_OBJECT':
      return Object.assign({}, state, {requestMade: true})

    case 'LOAD_ART_OBJECT':
      console.log("Here is the payload:")
      console.log(action.payload)
      return Object.assign({}, state, {
        primaryimageurl: action.payload.primaryimageurl,
        objectAPIId: action.payload.objectid,
        title: action.payload.title,
        author: action.payload.people[0].displayname,
        authorAPIId: action.payload.people[0].personid,
        medium: action.payload.medium,
        dated: action.payload.dated,
        period: action.payload.period,
        periodAPIId: action.payload.periodid,
        culture: action.payload.culture,
        commentary: action.payload.commentary,
        labeltext: action.payload.labeltext,
        description: action.payload.description,
        classificationAPIId: action.payload.classificationid,
        dateViewed: new Date,
        favorite: false,
        requestMade: false,
        validDataRetreived: true,
        errorWithDataRetrieval: {
          error: null,
          errorMessage: null
        }
      })

    default:
      return state
  }
}

export default currentArtObjectReducer
