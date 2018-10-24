import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Auth from './Auth'

class App extends React.Component {

}

const mapStateToProps = (state) => {
  return { authenticated: state.user.id }
}

export default connect(mapStateToProps)(App)