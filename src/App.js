import React, { lazy, Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './sass/main.scss';
import { LanguageContext } from './context';

//PAGES AND COMPONENTS NOT LAZY LOADED
import Layout from './containers/layout';
import AboutMe from './pages/about-me';
import Offer from './pages/offer';
import Contact from './pages/contact';
import Spinner from './components/spinner';
import Gallery from './components/gallery';

//REALISATIONS IMPORT
import realisation_1 from './assets/realisations/apartamenty_atal_projekt_w/index';
import realisation_2 from './assets/realisations/atal_pw/index';
import realisation_3 from './assets/realisations/bielskob_projekt_sabina_cibis/index';
import realisation_4 from './assets/realisations/biurowiec_kostbet_meble_projekt_anta/index';
import realisation_5 from './assets/realisations/czestochowa_meble_szklo_kamien_projekt_anta/index';
import realisation_6 from './assets/realisations/miedzno/index';
import realisation_7 from './assets/realisations/nexx_developer/index';
import realisation_8 from './assets/realisations/pala/index';
import realisation_9 from './assets/realisations/podlogi_drewno/index';
import realisation_10 from './assets/realisations/torun/index';

//PAGES AND COMPONENTS LAZY LOADED
const Realisations = lazy(() => {
	return import('./pages/realisations');
});

const TrustedMe = lazy(() => {
	return import('./pages/trusted-me');
});

const realisationsArray = [
	realisation_5,
	realisation_8,
	realisation_10,
	realisation_2,
	realisation_6,
	realisation_9,
	realisation_3,
	realisation_4,
	realisation_7,
	realisation_1,
];

console.log("Thanks for image lightbox to: 'https://www.npmjs.com/package/react-image-lightbox'");

function App() {
	const context = useContext(LanguageContext);

	return (
			<Layout realisationsArray={realisationsArray}>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path="/about-me" component={AboutMe} />
						<Route exact path="/offer" component={Offer} />
						<Route
							exact
							path="/realisations"
							render={props => <Realisations {...props} realisations={realisationsArray} />}
						/>
						<Route
							path="/realisations/:id"
							render={props => {
								const id = props.match.params.id - 1;
								if (!realisationsArray[id]) return <Redirect to="/" />;
								return (
									<Gallery
										{...props}
										images={realisationsArray[id].images}
										name={
											context.language === 'pl'
												? realisationsArray[id].name
												: realisationsArray[id].enName
										}
									/>
								);
							}}
						/>
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/trusted-me" render={props => <TrustedMe {...props} />} />
					</Switch>
				</Suspense>
			</Layout>
	);
}

export default App;
