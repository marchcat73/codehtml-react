import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderMenu from '../header-menu'
import Home from '../home'
import Price from '../price'
import Portfolio from '../portfolio'
import Contacts from '../contacts'
import Register from '../register'
import Login from '../login'

import './app.scss';
import { logout } from '../../store/actions/auth';
import {autoLogin} from '../../store/actions/auth'

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/price" component={ Price } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/contacts" component={ Contacts } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isLoggedIn) {
      routes = (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/logout" component={ logout } />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (     
        
          <div>
            <HeaderMenu isLoggedIn={this.props.isLoggedIn} />
            {routes}
          </div>
        
    
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
// export default App
// export default connect(mapStateToProps)(App)
