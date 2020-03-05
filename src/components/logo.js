import React from 'react';

import Image from '../assets/images/logo.png';

const Logo = props => (
	<div className="main-logo-container" style={props.custom ? { height: props.custom } : null}>
		<img src={Image} alt="Kudo Wnętrza" className="main-logo" />
	</div>
);

export default Logo;
