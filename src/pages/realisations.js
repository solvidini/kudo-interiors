import React, { useContext } from 'react';

import { LanguageContext } from '../context';
import Realisation from '../components/realisation';

const Realisations = props => {
	const context = useContext(LanguageContext);
	const realisationList = props.realisations.map((realisation, index) => (
		<Realisation
			key={realisation.name + index}
			to={props.match.url + '/' + (index + 1)}
			name={context.language === 'pl' ? realisation.name : realisation.enName}
			image={realisation.exhibit}
		/>
	));
	return (
		<section className="content">
			<h1>{context.dictionary.realisations.title}</h1>
			<div className="realisations">{realisationList}</div>
		</section>
	);
};

export default Realisations;
