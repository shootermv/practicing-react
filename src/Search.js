import React, { Component } from 'react';
import { SearchForm } from './SearchForm';
import { ReposList } from './ReposList'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    doSearch(term) {
        console.log('term: ', term.target.value)
    }
    render() {

        return (
            <div className="container">
                <div className="row">

                    <SearchForm onSearch={this.doSearch}></SearchForm>
                    <ReposList></ReposList>
                </div>
            </div>
        );
    }
}