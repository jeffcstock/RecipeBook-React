import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;