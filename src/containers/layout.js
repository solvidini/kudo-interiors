import React, { useState, useEffect } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import Footer from '../components/footer';
import '../sass/main.scss';
import Home from '../pages/home';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguagePack from '../components/languagePack';

const Layout = props => {
	const [contentIsVisible, setContentIsVisible] = useState(false);

	useEffect(() => {
		const loc = props.location.pathname;
		if (
			loc === '/contact' ||
			loc === '/trusted-me' ||
			loc === '/about-me' ||
			loc === '/offer' ||
			loc === '/realisations'
		) {
			setContentIsVisible(true);
		}
	});

	const openContentHandler = () => {
		setContentIsVisible(true);
	};

	const closeContentHandler = () => {
		setContentIsVisible(false);
	};

	return (
		<main>
			<div className={contentIsVisible ? 'main-menu main-menu--content' : 'main-menu'}>
				<LanguagePack />
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
			<Footer />
		</main>
	);
};
export default withRouter(Layout);
