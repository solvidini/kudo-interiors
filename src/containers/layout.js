/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';

// import Header from "../components/header"
// import Footer from "../components/footer"
// import SideDrawer from "../components/sideDrawer"
import '../sass/main.scss';
import Home from '../pages/home';

const Layout = props => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [contentIsVisible, setContentIsVisible] = useState(false);

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false);
	};

	const openContentHandler = () => {
		setContentIsVisible(true);
	};

	const closeContentHandler = () => {
		setContentIsVisible(false);
	};

	return (
		<>
			{/* <Header
        siteTitle={data.site.siteMetadata.title}
        sideDrawerTogglerClicked={sideDrawerToggleHandler}
        sideDrawerOpened={sideDrawerIsVisible}
      />
      <SideDrawer
        opened={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      /> */}
			<div className={contentIsVisible ? 'container container--content' : 'container'}>
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
					<div className={contentIsVisible ? 'content content--visible' : 'content'}>
						<div className="content__back">
							<NavLink to="/" exact onClick={closeContentHandler}>
								BACK
							</NavLink>
						</div>
						{props.children}
					</div>
				</main>
			</div>
		</>
	);
};
export default Layout;
