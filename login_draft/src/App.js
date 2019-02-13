import React, { Component } from 'react';
import Userform from "./Userform.jsx";
import Main from "./Main.jsx";

class App extends Component {
  constructor(props){
	super(props);
	this.availableStates = ["login","main"];
	this.state = {
		selected: 'login'
	}
	this.components = {
		login: <Userform app={this}/>,
		main: <Main app={this}/>
	}
	this.changeState = this.changeState.bind(this);
  }

  changeState(state){
	if(this.availableStates.includes(state)){
		this.setState({selected:state});
	}
  }


  render() {
	let state = this.components[this.state.selected];
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
