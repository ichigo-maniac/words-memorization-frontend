'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

// const Dashboard = require('./dashboard');
// const Sidebar = require('./sidebar');
// const Toolbar = require('./toolbar');

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

class Dashboard extends React.Component{
	render() {
		return (
			<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
				<div
					className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">Dashboard</h1>
					<div className="btn-toolbar mb-2 mb-md-0">
						<div className="btn-group mr-2">
							<button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
							<button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
						</div>
						<button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
							<span data-feather="calendar"></span>
							This week
						</button>
					</div>
				</div>
			</main>
		)
	}
}

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
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="file"></span>
								Orders
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="shopping-cart"></span>
								Products
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="users"></span>
								Customers
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="bar-chart-2"></span>
								Reports
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="layers"></span>
								Integrations
							</a>
						</li>
					</ul>

					<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
						<span>Saved reports</span>
						<a className="d-flex align-items-center text-muted" href="#">
							<span data-feather="plus-circle"></span>
						</a>
					</h6>
					<ul className="nav flex-column mb-2">
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="file-text"></span>
								Current month
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="file-text"></span>
								Last quarter
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="file-text"></span>
								Social engagement
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="file-text"></span>
								Year-end sale
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

class Toolbar extends React.Component{
	render() {
		return (
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
				<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">Sign out</a>
					</li>
				</ul>
			</nav>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
