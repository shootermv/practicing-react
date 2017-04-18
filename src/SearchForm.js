import React, { Component } from 'react';



export class SearchForm extends Component {

    render() {
        let { onSearch } = this.props;
        return (
            <form className="navbar-form" role="search">
                <div className="input-group add-on">
                    <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" onChange={onSearch} />
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}