import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import { logout } from '../../store/actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    return <Redirect to={'/'} />
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)