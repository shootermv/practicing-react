import React, { Component } from 'react';
import logo from './logo.svg';
import { ReposList } from './ReposList';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    let toggle = this.toggle.bind(this);
    return (
      <div className="App">
        <SideBar open={this.state.open}></SideBar>
        <TopBar onToggle={toggle}></TopBar>
        <ReposList repos={['angular', 'materialzecss']}></ReposList>
      </div>
    );
  }
}

export default App;
