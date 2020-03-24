import React, { useContext } from 'react';

import { LanguageContext } from '../context';
import Partner from '../components/partner';

import amsMetal from '../assets/images/partners/ams-metal.png';
import barkaCieslika from '../assets/images/partners/barka-cieslika.png';
import boscoStudio from '../assets/images/partners/bosco-studio.png';
import clou from '../assets/images/partners/clou.png';
import dha from '../assets/images/partners/dha.png';
import kostBet from '../assets/images/partners/kost-bet.png';
import projektW from '../assets/images/partners/projekt-w.png';
import solidfloor from '../assets/images/partners/solidfloor.png';

const TrustedMe = () => {
	const context = useContext(LanguageContext);
	return (
		<section className="content">
			<h1>{context.dictionary.trustedMe.title}</h1>
			<h4>{context.dictionary.trustedMe.subtitle}:</h4>
			<div className="partners">
				<Partner
					src={barkaCieslika}
					link="https://www.anta-architekci.pl"
					alt="Barka Cieślika"
					style={{ padding: '.7rem' }}
				/>
				<Partner src={projektW} link="http://www.projektw.pl" alt="Projekt W" />
				<Partner src={boscoStudio} link="http://www.boscostudio.pl" alt="BOSCO Studio" />
				<Partner src={clou} link="https://www.clou.nl" alt="clou" style={{ padding: '2.5rem' }} />
				<Partner src={amsMetal} link="http://amsmetal.pl" alt="AMS METAL" />
				<Partner src={dha} alt="DHa" style={{ transform: 'scale(1.2)' }} />
				<Partner src={kostBet} link="https://kostbet.pl/" alt="KOST-BET" style={{ padding: '1rem' }} />
				<Partner
					src={solidfloor}
					link="https://www.solidfloor.com/en"
					alt="SOLID floor"
					style={{ padding: '1rem' }}
				/>
			</div>
		</section>
	);
};

export default TrustedMe;
