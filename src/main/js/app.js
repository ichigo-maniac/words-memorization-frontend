'use strict';

import React from "react";
import ReactDOM from "react-dom";

/** Components */
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import Dashboard from "./dashboard";

/** Import libraries */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.slim.js';
import 'chart.js/dist/Chart.bundle.min.js';
import 'chart.js/dist/Chart.min.css';

class App extends React.Component {

	render() {
		return (
			<div>
				<Toolbar/>
				<div className="container-fluid">
					<div className="row">
						<Sidebar/>
						<Dashboard/>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
