import React from 'react';

import Logo from '../components/logo';
import HomeMenu from '../components/homeMenu';

const Home = props => (
	<section className={props.contentIsVisible ? "home home--right" : "home"}>
		<div className="home-container">
			<Logo />
			<HomeMenu openContent={props.openContent} closeContent={props.closeContent} />
		</div>
	</section>
);

export default Home;
