import React from "react";

export function Navs() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse "
				id="navbarTogglerDemo01"
				display="margin-left">
				<a className="navbar-brand mr-auto" href="#">
					Start Bootstrap
				</a>
				<ul className="navbar-nav mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
