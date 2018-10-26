
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { ProtectedRoute } from '@devpoint/dps-react-kit'
import Loadable from 'react-loadable'
//import Home from './Home'
//import Auth from './Auth'
//import FetchUser from './FetchUser'
//import Contact from './Contact'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})

const Auth = Loadable({
  loader: () => import('./Auth'),
  loading: Loading,
})

const Contact= Loadable({
  loader: () => import('./Contact'),
  loading: Loading,
})

const App = () => (
  <>
    <Link to="/contact">Contact Us</Link>
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/login"
          render={ (props) => <Auth {...props} type="Login" /> }
        />
        <Route
          exact
          path="/register"
          render={ (props) => <Auth {...props} type="Register" /> }
        />
      </Switch>
    </FetchUser>
  </>
)

export default App