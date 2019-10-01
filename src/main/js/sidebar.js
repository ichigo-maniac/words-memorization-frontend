'use strict';

import React from "react";

class Sidebar extends React.Component{
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                            </a>
                        </li>

                        <SidebarLinkItem name="Orders"/>
                        <SidebarLinkItem name="Products"/>
                        <SidebarLinkItem name="Customers"/>
                        <SidebarLinkItem name="Reports"/>
                        <SidebarLinkItem name="Integrations"/>
                    </ul>
                </div>
            </nav>
        )
    }
}

class SidebarLinkItem extends React.Component {

    render() {
        return(
            <li className="nav-item">
                <a className="nav-link" href="#">
                    {this.props.name}
                </a>
            </li>
        )
    }
}

export default Sidebar;