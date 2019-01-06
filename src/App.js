import React, { Component } from 'react';
import './App.scss';

import UpperFold from './cmps/UpperFold/UpperFold.component'
import NavBar from './cmps/NavBar/NavBar.component'

class App extends Component {
  upperFold = {
    content1: 'Hey! I\'m',
    content2: 'A Full-Stack web developer.',
    name: 'Bar Peled',
    btnContent: 'View my work'
  }
  
  render() {
    return (
      <div className="App">
        {
          <UpperFold
            content1={this.upperFold.content1}
            content2={this.upperFold.content2}
            name={this.upperFold.name}
            btnContent={this.upperFold.btnContent}
          ></UpperFold>
        }
        {
          <NavBar></NavBar>
        }
      </div>
    );
  }
}

export default App;
