import React from 'react';

import { NavLink } from 'react-router-dom';

import Logo from '../components/logo';
import HomeMenu from '../components/homeMenu';

const Home = props => {
	return (
		<section className={props.contentIsVisible ? 'home home--right' : 'home'}>
			<div className="home-container">
				<NavLink to="/" exact onClick={props.closeContent}>
					<Logo />
				</NavLink>
				<HomeMenu openContent={props.openContent} closeContent={props.closeContent} />
			</div>
		</section>
	);
};

export default Home;
