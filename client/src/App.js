import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getFavorites } from './actions/serverApiThunks'

import Layout from './containers/Layout'

class App extends Component {

  // componentDidMount() {
  //   this.props.getFavorites()
  // }

  render() {

    return (
        <div className="App">
          <Layout/>
        </div>

    );
  }

  // render() {
  //
  //   return (
  //     <BrowserRouter>
  //       <div className="App">
  //         <Layout/>
  //       </div>
  //     </BrowserRouter>
  //   );
  // }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       getFavorites: () => dispatch(getFavorites())
//   }
// }

// export default connect(null, mapDispatchToProps)(Layout)
export default App
