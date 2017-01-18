import React, { Component } from 'react';
import Navbar from './Navbar';
import CardList from '../containers/CardList';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar title='RecipeBook' />
        <CardList />
      </div>
    );
  }
}

export default App;
