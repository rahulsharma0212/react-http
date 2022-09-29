import React, { Component } from 'react';
import {BrowserRouter } from "react-router-dom";

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/'> 
      {/*if our project is inside any folder you have to change base name  example:/Ranul */}
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
