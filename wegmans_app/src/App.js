import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Userform from './pages/Userform';
import Main from './pages/Main';
import Signup from './pages/Signup';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path='/' component={Userform}/>
					<Route path='/home' component={Main}/>
					<Route path='/sign_up' component={Signup}/>
				</Switch>
			</div>
		)
		return (
			<Switch>
				<App/>
			</Switch>
		);
	}
}

export default App;
