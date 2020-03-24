import React, { useContext } from 'react';

import { LanguageContext } from '../context';
import { NavLink } from 'react-router-dom';

const Realisation = props => {
	const context = useContext(LanguageContext);
	return (
		<div className="realisations__item">
			<NavLink to={props.to}>
				<div className="realisations__item-name">{props.name}</div>
				<img src={props.image} className="realisations__item-image" alt={props.name} />
			</NavLink>
		</div>
	);
};

export default Realisation;
