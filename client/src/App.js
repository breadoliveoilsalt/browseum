import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getFavorites } from './actions/serverApiThunks'

// import Layout from './containers/Layout'
import LayoutParent from './containers/LayoutParent'

class App extends Component {

  // Does not load
  // componentDidMount() {
  //   debugger
  //   this.props.getFavorites()
  // }

  render() {

    return (
        <div className="App">
          <LayoutParent/>
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

// export default connect(null, mapDispatchToProps)(App)
export default App
