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
                <button style={{ fontSize: '24px' }}>first</button>
                <button style={{ fontSize: '24px' }}>second</button>
            </aside>
        );
    }
}