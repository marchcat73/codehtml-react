import React, { Component } from 'react';

import './technologies.css';

export default class Technologies extends Component {

  state = {
    technologies: [
      {name: 'Вёрстка из PSD макетов'},
      {name: 'HTML5'},
      {name: 'CSS3'},
      {name: 'SASS'},
      {name: 'Gulp'},
      {name: 'Bootstrap'},
      {name: 'Flexbox'},
      {name: 'JavaScrypt'},
      {name: 'Node JS'},
      {name: 'MongoDB'},
      {name: 'Angular 6'},
      {name: 'Vue JS'}
    ]
  }

  renderItems(arr) {
    return arr.map(({name}, index) => {
      return (
        <li
            key={index}
        >
          {name}
        </li>
      );
    });
  }

  render () {

    const { technologies } = this.state

    const items = this.renderItems(technologies);

    return (
      <ul>
        {items}
      </ul>
    )
  }

}