import React, { Component } from 'react';



export class ReposList extends Component {

    render() {
        let { repos } = { repos: ['angular', 'materializecss'] };
        console.log('REPOS:', repos)
        return (
            <ul className="List" >
                {repos.map(repo => <li key={repo}>{repo}</li>)}
            </ul>
        );
    }
}