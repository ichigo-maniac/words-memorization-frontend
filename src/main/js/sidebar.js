'use strict';

import React from "react";

/**
 * Sidebar component's class
 */
class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {activeLink : null};
        /** Bind listeners */
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(linkItemId) {
        this.setState({activeLink : linkItemId});
    }

    render() {
        /** Create link items */
        let linkItems = [
            {id : "dashboard_link_item", name : "Dashboard", active : false},
            {id : "orders_link_item", name : "Orders", active : false},
            {id : "products_link_item", name : "Products", active : false}
        ];

        const activeLink = this.state.activeLink;
        linkItems.forEach(function(linkItem) {
            linkItem.active = activeLink == linkItem.id;
        });

        /** Map link items */
        let linkItemsView = linkItems.map((linkItem) =>
            <SidebarLinkItem id={linkItem.id} active={linkItem.active} key={linkItem.id} name={linkItem.name} onItemClick={this.handleItemClick}/>
        );

        /** Rendering */
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {linkItemsView}
                    </ul>
                </div>
            </nav>
        )
    }
}

/**
 * Sidebar link item's class
 */
class SidebarLinkItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onItemClick(this.props.id);
    }

    render() {
        return(
            <li className="nav-item">
                {this.props.active == true ? (
                    <a className="nav-link active" href="#" onClick={this.handleClick}>
                        {this.props.name}
                    </a>
                ): (
                    <a className="nav-link" href="#" onClick={this.handleClick}>
                        {this.props.name}
                    </a>
                )}
            </li>
        )
    }
}

export default Sidebar;