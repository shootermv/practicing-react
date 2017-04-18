import React, { Component } from 'react';
import logo from './logo.svg';


export class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { open } = this.props;
        let isOpen = open ? 'hidden' : '';
        return (
            <aside className={"sideBar " + isOpen} >
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="nav nav-pills nav-stacked">
                    <li><a href="#/">Favorite Repos</a></li>
                    <li><a href="#/search">Search Repo</a></li>
                </ul>
            </aside>
        );
    }
}