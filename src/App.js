import React, { Component } from 'react';
import logo from './logo.svg';
import { ReposList } from './ReposList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let toggle = this.toggle.bind(this);
    return (
      <div className="App">
        <ReposList repos={['angular', 'materialzecss']}></ReposList>
      </div>
    );
  }
}

export default App;
