import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { getData } from '../actions/testThunkActions'

class TestThunk extends Component {

  // DID I DO THIS RIGHT: LINKING STATE OF COMPONENT TO STORE/STATE?

  // PROBLEM HERE: I CAN GET THE DATA FROM THE THUNK, AND THE STORE/STATE
  // UPDATES JUST FINE, BUT THE STATE OF THE COMPONENT WILL NOT UPDATE.
  // I THINK THE PROBLEM IS THAT I DON'T NEED STATE TO BEGIN WITH.
  // JUST USE PROPS (THAT ARE CONNECTED TO THE STORE); SUCH PROPS
  // UPDATE JUST FIND AND RE-RENDER THE COMPONENT UPON UPDATE

  // TO GET AN UPDATE TO A REDUX STORE/STATE TO UPDATE A COMPONENT STATE,
  // I THINK I'D NEED TO CALL SETSTATE DIRECTLY...AS IN LET THE STATE NOW
  // EQUAL THE PROPS

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     requestMade: this.props.testThunk.requestMade,
  //     isLoaded: this.props.testThunk.isLoaded,
  //     data: this.props.testThunk.data
  //   }
  //
  //   // this.getData = this.getData.bind(this)
  // }

  handleClick = (e) => {
    e.preventDefault()
    console.log("u clicked button")
    this.props.getDataViaThunk('/testthunk')
  }

  render() {
    const dataFetched = this.props.testThunk.data.map((d, i) => {
      return <li key={i}> {d} </li>
    })

    return (
      <div>
        <h2>You made it to TestThunk!</h2>
        <p> Data requested: {this.props.testThunk.requestMade ? "True" : "False"} </p>
        <p> Data loaded: {this.props.testThunk.isLoaded ? "True" : "False"} </p>

        <button onClick={this.handleClick}> Click to fetch data </button>

        <p> Here is the data requested: </p>
        <ul> {dataFetched} </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { testThunk: state.testThunk };
}

// NOTE THAT BECAUSE getData is a thunk, this does not work. Specifically,
// on line 50, there is a problem calling dispatch and passing getData to it.
// const mapDispatchToProps = (dispatch) => {
//   return { getDataViaThunk: (url) => {dispatch(getData(url))}}
// }

// NOTE ALSO THAT WHEN YOU ARE PASSING A THUNK, YOU NEED TO USE
// .bindActionCreators! The format above will not work.
// The first argument of bindActionCreators can be a single
// thunk (as here), or an object that is a collection of stuff.
// I did the former below.
// The latter you would get if you did:
  // import * as thunkActions from './actions/testThunkActions'
const mapDispatchToProps = (dispatch) => {
  return { getDataViaThunk: bindActionCreators(getData, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(TestThunk)
