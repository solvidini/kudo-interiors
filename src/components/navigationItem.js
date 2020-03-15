import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => (
	<li className="home-menu__nav-item">
		<NavLink
			to={props.to}
			exact
			activeClassName={!props.home ? 'home-menu__nav-item--active' : null}
			onClick={props.clicked}
		>
			{props.title}
		</NavLink>
	</li>
);

export default NavigationItem;
