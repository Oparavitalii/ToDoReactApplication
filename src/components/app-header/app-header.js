import React, { Component } from 'react'; 

import './app-header.css';

export default class AppHeader extends Component {
  render() {
    return (
      <header className='header'>
          <div className='container'>
                <p className='header__text'>It's online to-do list</p>
          </div>
      </header>
    )
  }
}