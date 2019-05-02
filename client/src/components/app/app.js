import React, { Component } from 'react';

import HeaderMenu from '../header-menu'
import Home from '../home'
import Price from '../price'
import Portfolio from '../portfolio'
import Contacts from '../contacts'

import './app.scss';

export default class App extends Component {



  render() {
    return (
      <div>
        <HeaderMenu />
        <Home />
        <Price />
        <Portfolio />
        <Contacts />
      </div>
    );
  }
}
