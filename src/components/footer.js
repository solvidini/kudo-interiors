import React, { useContext } from 'react';

import { LanguageContext } from '../context';

const Footer = props => {
	const context = useContext(LanguageContext);
	return (
		<footer className="footer">
			<div className="footer__copyright">
				<b>KUDO&nbsp;Wnętrza</b>&nbsp;&copy;&nbsp;<b>{new Date().getFullYear()}</b>{' '}
				-&nbsp;{context.dictionary.footer.allRights}
			</div>
			<div className="footer__creator">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="http://samuelk.pl/"
					title="Samuel Kędziora - Web Developer"
				>
					{context.dictionary.footer.creator} <b>Samuel&nbsp;Kędziora</b>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
