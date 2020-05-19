import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import './App.css';

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				{/* Switch helps in not being redirected to home  */}
				<Switch>
					<Route path="/" exact>
						<Users />
					</Route>
					<Route path="/:userid/places" exact>
						<UserPlaces />
					</Route>
					<Route path="/places/new">
						<NewPlace />
					</Route>
					{/* if the users enters a random text Redirect will send him to the home page. */}
					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
