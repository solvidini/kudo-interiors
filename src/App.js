import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './sass/main.scss';

//PAGES AND COMPONENTS NOT LAZY LOADED
import Layout from './containers/layout';
import AboutMe from './pages/about-me';
import Offer from './pages/offer';
import Contact from './pages/contact';
import Spinner from './components/spinner';

//PAGES AND COMPONENTS LAZY LOADED
const Realisations = lazy(() => {
	return import('./pages/realisations');
});

const TrustedMe = lazy(() => {
	return import('./pages/trusted-me');
});

function App() {
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path="/about-me" component={AboutMe} />
					<Route exact path="/offer" component={Offer} />
					<Route exact path="/realisations" render={props => <Realisations {...props} />} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/trusted-me" render={props => <TrustedMe {...props} />} />
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
