import React from 'react';

const Footer = props => (
	<footer className="footer">
		<div className="footer__copyright">
			<b>KUDO Wnętrza</b>&nbsp;&copy;&nbsp;<b>{new Date().getFullYear()}</b> -&nbsp;All&nbsp;rights&nbsp;reserved
		</div>
		<div className="footer__creator">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://samuelk.pl/"
				title="Samuel Kędziora - Web Developer"
			>
				Website&nbsp;created&nbsp;by <b>Samuelk Kędziora</b>
			</a>
		</div>
	</footer>
);

export default Footer;
