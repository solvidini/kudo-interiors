import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from '../components/navigationItem';

const HomeMenu = props => (
	<div className="home-menu">
		<nav className="home-menu__nav">
			<ul className="home-menu__nav-list">
				<NavigationItem to="/" clicked={props.closeContent} title="Home" home={true} />
				<NavigationItem to="/about-me" clicked={props.openContent} title="About&nbsp;Me" />
				<NavigationItem to="/offer" clicked={props.openContent} title="Offer" />
				<NavigationItem to="/realisations" clicked={props.openContent} title="Realisations" />
				<NavigationItem to="/contact" clicked={props.openContent} title="Contact" />
				<NavigationItem to="/trusted-me" clicked={props.openContent} title="Trusted&nbsp;Me" />
			</ul>
		</nav>
	</div>
);

export default HomeMenu;
