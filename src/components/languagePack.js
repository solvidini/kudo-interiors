import React, { useContext } from 'react';

import { LanguageContext } from '../context';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguagePack = props => {
	const context = useContext(LanguageContext);
	return (
		<div className="language-pack">
			<div className="language-pack__item">
                {context.language === 'pl' && <FontAwesomeIcon icon="arrow-right" className="language-pack__icon"/>}
				<button
					className={
						context.language === 'pl'
							? 'language-pack__select language-pack__select--active'
							: 'language-pack__select'
					}
					onClick={context.changeLanguage}
					data-language="pl"
				>
					Polski
				</button>
			</div>
			<div className="language-pack__item">
                {context.language === 'en' && <FontAwesomeIcon icon="arrow-right" className="language-pack__icon"/>}
				<button
					className={
						context.language === 'en'
							? 'language-pack__select language-pack__select--active'
							: 'language-pack__select'
					}
					onClick={context.changeLanguage}
					data-language="en"
				>
					English
				</button>
			</div>
		</div>
	);
};

export default LanguagePack;
