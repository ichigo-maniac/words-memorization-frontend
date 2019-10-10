'use strict';

import React from "react";
import ReactDOM from "react-dom";

/** Components */
import Sidebar from "./sidebar";
import MainView from "./main_view";

/** Libraries */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'jquery.easing/jquery.easing.min'
import 'chart.js/dist/Chart.bundle.min.js';
import 'chart.js/dist/Chart.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

/** External libraries */
import './external_libs/sb-admin-2.min.css'

class App extends React.Component {

	render() {
		return (
			<div>
				<Sidebar/>
				<MainView/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('wrapper')
)
