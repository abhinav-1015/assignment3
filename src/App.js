import React, { Component } from 'react';
import "./App.css"
import User from "./components/user";
import Content from './components/content';

class App extends Component {

  render() { 
    return (
      <div>
        <User/>
        <Content/>

      </div>
      
    );
  }
}
 
export default App;