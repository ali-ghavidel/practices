import React, { Component } from 'react';
import './App.css'
import Title from './Title';
import Timer from './Timer';
class App extends Component {
  
  render() {
    return (
      <div className='main'>
        <Title />
        <Timer />      
      </div>
    );
  }
}

export default App;

