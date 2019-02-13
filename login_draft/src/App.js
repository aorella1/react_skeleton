import React, { Component } from 'react';
import Userform from "./Userform.jsx";

class App extends Component {
  constructor(props){
	super(props);
	this.availableStates = ["login","main"];
	this.state = {
		login: true,
		main: false
	}
	this.components = {
		login: <Userform app={this}/>
	}

	this.resetState = {
		login: false,
		main: false
	}
	this.currentState = this.components["login"];
	this.changeState = this.changeState.bind(this);
  }

  changeState(state){
	this.setState = this.resetState;
	this.setState({[state]:true});
	this.currentState = this.components[state];
  }


  render() {
	let state;
	for(let i = 0; i < this.availableStates.length; i++){
		if(this.state[this.availableStates[i]] === true){
			state = this.components[this.availableStates[i]];
		}
	}
	console.log(state);
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
	return (
		<div className = "App">
			{state}
		</div>
	);
  }
}

export default App;
