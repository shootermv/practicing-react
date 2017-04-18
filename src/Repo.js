import React, { Component } from 'react';



export class Repo extends Component {

    render() {
        let { repo } = this.props;
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    {repo}
                </div>
            </div>
        );
    }
}