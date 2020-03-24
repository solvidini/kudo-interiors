import React from 'react';

const Partner = props => (
	<div className="partners__item" style={props.style ? {...props.style} : null}>
		<a className="partners__item-link" href={props.link} target="_blank" rel="noopener noreferrer">
			<img className="partners__item-image" src={props.src} alt={props.alt} />
		</a>
	</div>
);

export default Partner;
