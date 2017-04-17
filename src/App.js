import React, { Component } from 'react';
import logo from './logo.svg';
import { ReposList } from './ReposList';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Search } from './Search';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './Main';
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
    //<ReposList repos={['angular', 'materializecss']}></ReposList>
    let toggle = this.toggle.bind(this);
    return (

      <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={ReposList} />
          <Route path="/search" component={Search} />
        </Route>
      </Router>

    );
  }
}

export default App;
