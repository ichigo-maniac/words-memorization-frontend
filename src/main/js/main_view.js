'use strict';

import React from "react";
import Toolbar from "./toolbar";
import Dashboard from "./dashboard";

class MainView extends React.Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Toolbar/>
                    <Dashboard/>
                </div>
            </div>
        )
    }
}
export default MainView;