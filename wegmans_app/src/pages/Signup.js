
const React = require('react');

class Signup extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}

	async handleSubmit(event){
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
		var payload = new XMLHttpRequest();
		payload.open("POST",'/sign_up_user',true);
		payload.setRequestHeader("Content-Type","application/json");
		payload.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				let response = JSON.parse(payload.responseText);
				let errCode = response.code;
				if (errCode === 11000){
					console.log("User already exists!") // replace this with pretty front end stuff
					return;
				}
				console.log(response.message) //replace this with pretty front end stuff
				
			}
		}
		payload.send(JSON.stringify({
			_id: username,
			password: password
		}));
	}

	render(){
		return (
			<div className = "App">
				<h1>Sign Up</h1>
				<br/>
				<form onSubmit = {this.handleSubmit}>
					<p>Username</p>
					<input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
					<br/>
					<p>Password</p>
					<input type = "text" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
					<br/>
					<button type = "submit" value = "submit">Submit</button> 
				</form>
			</div>
		);
	}

} 
export default Signup;
