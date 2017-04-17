import React, { Component } from 'react';
import logo from './logo.svg';


export class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let toggle = this.props.onToggle;
        return (
            <nav className="List">
                <button onClick={toggle} style={{ fontSize: '24px' }}>۞</button>
            </nav>
        );
    }
}