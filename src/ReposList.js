import React, { Component } from 'react';
import { Repo } from './Repo';


export class ReposList extends Component {

    render() {
        let { repos } = { repos: ['angular', 'materializecss'] };

        return (
            <div className="container list-container">
                <div className="row">
                    {repos.map(repo => <Repo key={repo} repo={repo}></Repo>)}
                </div>
            </div>
        );
    }
}