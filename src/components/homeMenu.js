import React, { useContext } from 'react';

import NavigationItem from '../components/navigationItem';
import { LanguageContext } from '../context';

const HomeMenu = props => {
	const context = useContext(LanguageContext);
	return (
		<div className="home-menu">
			<nav className="home-menu__nav">
				<ul className="home-menu__nav-list">
					<NavigationItem to="/" clicked={props.closeContent} title={context.dictionary.nav.home} home={true} />
					<NavigationItem to="/about-me" clicked={props.openContent} title={context.dictionary.nav.about} />
					<NavigationItem to="/offer" clicked={props.openContent} title={context.dictionary.nav.offer} />
					<NavigationItem to="/realisations" clicked={props.openContent} title={context.dictionary.nav.realisations} />
					<NavigationItem to="/contact" clicked={props.openContent} title={context.dictionary.nav.contact} />
					<NavigationItem to="/trusted-me" clicked={props.openContent} title={context.dictionary.nav.trustedMe} />
				</ul>
			</nav>
		</div>
	);
};

export default HomeMenu;
