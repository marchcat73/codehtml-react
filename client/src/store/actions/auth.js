import decode from 'jwt-decode'
import {AUTH_SUCCESS, AUTH_LOGOUT} from './actionTypes'

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email, password
    }
    
    try {
      
      await fetch('http://localhost:5000/api/login',
        { 
          method: 'POST', 
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(authData), 
          mode: 'cors'
        })
        .then( (response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          
          return response.json();
        })
        .then((data) => {
          const decodeExp = decode(data.token).exp;
          const expirationData = new Date(new Date().getTime() + decodeExp);

          localStorage.setItem('token', data.token);          
          localStorage.setItem('expirationData', expirationData);
          dispatch(authSuccess(data.token))
        })
    } catch (e) {
      console.log(e)
    }

    
  }
}

export function logout() {
  localStorage.removeItem('token')          
  localStorage.removeItem('expirationData')
  return {
    type: AUTH_LOGOUT
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(logout())
    } else {
      const expirationData = new Date(localStorage.getItem('expirationData'))
      if (expirationData <= new Date()) {
        dispatch(logout())
      } else {
        dispatch(authSuccess(token))
      }
    }
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}