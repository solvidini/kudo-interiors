/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

// import Header from "../components/header"
// import Footer from "../components/footer"
// import SideDrawer from "../components/sideDrawer"
import '../sass/main.scss';
import Home from '../pages/home';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = props => {
	const [contentIsVisible, setContentIsVisible] = useState(false);

	const openContentHandler = () => {
		setContentIsVisible(true);
	};

	const closeContentHandler = () => {
		setContentIsVisible(false);
	};

	return (
		<main>
			<div className={contentIsVisible ? 'main-menu main-menu--content' : 'main-menu'}>
				<Route
					path="/"
					render={props => (
						<Home
							{...props}
							openContent={openContentHandler}
							closeContent={closeContentHandler}
							contentIsVisible={contentIsVisible}
						/>
					)}
				/>
			</div>
			<div className={contentIsVisible ? 'content-container content-container--visible' : 'content-container'}>
				<div className="content-container__back" title="Back">
					<NavLink to="/" exact onClick={closeContentHandler}>
						<FontAwesomeIcon icon="arrow-left" />
					</NavLink>
				</div>
				{props.children}
			</div>
		</main>
	);
};
export default Layout;
