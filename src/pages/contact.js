import React, { useContext } from 'react';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LanguageContext } from '../context';

const Contact = () => {
	const context = useContext(LanguageContext);
	return (
		<section className="content">
			<h1>{context.dictionary.contact.title}</h1>
			<div className="contact">
				<h3 className="contact__name">Witold Kostka</h3>
				<div className="contact__item-list">
					<div className="contact__item">
						<div className="contact__item-title">{context.dictionary.contact.call}</div>
						<a href="tel:+48883773004">
							<FontAwesomeIcon icon="phone-alt" className="contact__item-fa" />
							+48&nbsp;883&nbsp;773&nbsp;004
							<FontAwesomeIcon icon="arrow-left" className="contact__item-fa-invi" />
						</a>
					</div>
					<div className="contact__item">
						<div className="contact__item-title">{context.dictionary.contact.write}</div>
						<a href="mailto:witek@kudownetrza.pl ">
							<FontAwesomeIcon icon="envelope" className="contact__item-fa" />
							witek@kudownetrza.pl
							<FontAwesomeIcon icon="arrow-left" className="contact__item-fa-invi" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
