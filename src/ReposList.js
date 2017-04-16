import React, { Component } from 'react';
import logo from './logo.svg';


export class ReposList extends Component {

    render() {
        let { repos } = this.props;
        console.log('REPOS:', repos)
        return (
            <ul className="List" >
                {repos.map(repo => <li key={repo}>{repo}</li>)}
            </ul>
        );
    }
}