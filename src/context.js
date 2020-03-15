import React, { useState, useEffect } from 'react';

// Translations
import polish from './translations/pl.json';
import english from './translations/en.json';

export const LanguageContext = React.createContext();

export const LanguageProvider = props => {
	const [language, setLanguage] = useState('pl');
	const [dictionary, setDictionary] = useState(polish);

	useEffect(() => {
		if (localStorage.getItem('language')) {
			setLanguage(localStorage.getItem('language'));
		}
	}, []);

	useEffect(() => {
		if (language === 'pl') setDictionary(polish);
		else setDictionary(english);
	}, [language]);

	const changeLanguage = e => {
		e.preventDefault();
		const languageToChange = e.target.dataset.language;
		if (languageToChange !== 'pl' && languageToChange !== 'en') return;
		setLanguage(languageToChange);
		localStorage.setItem('language', languageToChange);
	};

	return (
		<LanguageContext.Provider
			value={{
				language: language,
				changeLanguage: changeLanguage,
				dictionary: dictionary
			}}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};
