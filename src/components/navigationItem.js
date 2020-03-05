import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => (
	<li className="home-menu__nav-item" onClick={props.clicked}>
		<NavLink to={props.to} exact activeClassName="home-menu__nav-item--active">
			{props.title}
		</NavLink>
	</li>
);

export default NavigationItem;
