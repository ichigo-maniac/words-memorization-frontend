'use strict';

import React from "react";

/**
 * Sidebar component's class
 */
class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeLink: null};
        /** Bind listeners */
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(linkItemId) {
        this.setState({activeLink: linkItemId});
    }

    render() {

        const activeLink = this.state.activeLink;

        /** Kanji items */
        let kanjiItems = [
            {id: "kanji_all", name: "All", active: false},
            {id: "kanji_n5", name: "N5", active: false},
            {id: "kanji_n4", name: "N4", active: false},
            {id: "kanji_n3", name: "N3", active: false},
            {id: "kanji_n2", name: "N2", active: false},
            {id: "kanji_n1", name: "N1", active: false}
        ];
        kanjiItems.forEach(function (sidebarItem) {
            sidebarItem.active = activeLink == sidebarItem.id;
        });

        /** Words items */
        let wordsItems = [
            {id: "words_all", name: "All", active: false},
            {id: "words_n5", name: "N5", active: false},
            {id: "words_n4", name: "N4", active: false},
            {id: "words_n3", name: "N3", active: false},
            {id: "words_n2", name: "N2", active: false},
            {id: "words_n1", name: "N1", active: false}
        ];
        wordsItems.forEach(function (sidebarItem) {
            sidebarItem.active = activeLink == sidebarItem.id;
        });

        /** Map sidebar items */
        let kanjiSidebarItems = kanjiItems.map((item) =>
            <SidebarItem id={item.id} active={item.active} key={item.id} name={item.name}
                         onItemClick={this.handleItemClick}/>
        );
        let wordsSidebarItems = wordsItems.map((item) =>
            <SidebarItem id={item.id} active={item.active} key={item.id} name={item.name}
                         onItemClick={this.handleItemClick}/>
        );

        /** Rendering */
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <SidebarHeader title="Words memorization"/>
                <hr className="sidebar-divider my-0"/>
                <SidebarItem id="dashboard" key="dashboard" name="Dashboard" single={true}
                             active={activeLink == 'dashboard'} onItemClick={this.handleItemClick}/>

                <SidebarDivider title="Learning"/>
                <SidebarGroup id="kanjiSidebarGroup" name="Kanji" sidebarItems={kanjiSidebarItems}/>
                <SidebarGroup id="wordsSidebarGroup" name="Words" sidebarItems={wordsSidebarItems}/>

                <SidebarItem id="phrases" key="phrases" name="Phrases" single={true}
                             active={activeLink == 'phrases'} onItemClick={this.handleItemClick}/>

            </ul>
        )
    }
}

class SidebarHeader extends React.Component {

    render() {
        return (
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">{this.props.title}</div>
            </a>
        )
    }
}

class SidebarDivider extends React.Component {

    render() {
        return (
            <div>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">{this.props.title}</div>
            </div>
        )
    }
}

class SidebarGroup extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#" + this.props.id}
                   aria-expanded="true" aria-controls={this.props.id}>
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>{this.props.name}</span>
                </a>
                <div id={this.props.id} className="collapse" aria-labelledby="headingUtilities"
                     data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        {this.props.sidebarItems}
                    </div>
                </div>
            </li>
        )
    }

}

class SidebarItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onItemClick(this.props.id);
    }

    render() {
        return (
            this.props.single == true ? (
                <li className={this.props.active == true ? ("nav-item active") : ("nav-item")}>
                    <a className="nav-link" href="#" onClick={this.handleClick}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>{this.props.name}</span>
                    </a>
                </li>
            ) : (
                <li className="nav-item">
                    <a className={this.props.active == true ? ("collapse-item active") : ("collapse-item")} href="#" onClick={this.handleClick}>
                        <span>{this.props.name}</span>
                    </a>
                </li>
            )
        )
    }
}

export default Sidebar;