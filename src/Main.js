import React from 'react'
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
    }
    toggle() {
        this.setState({ open: !this.state.open });
    }
    render() {
        let toggle = this.toggle.bind(this);
        let open = !this.state.open ? 'layout-open' : '';
        return (

            <div className={"App " + open}>
                <SideBar open={this.state.open} />
                <TopBar onToggle={toggle} />
                {this.props.children}
            </div>
        );
    }
}

export default Main;