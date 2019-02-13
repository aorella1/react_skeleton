
const React = require('react');

class Userform extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = 
			{
				username: '',
				password: ''
			};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit(event) {
		console.log(event.target.username.value);
		console.log(event.target.password.value);
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.app.changeState("main");
		event.preventDefault();
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>Username: </p>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
					<br/>
					<p>Password</p>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
					<br/>
					<input type="submit" value="submit"/>
				</form>
			</div>
		);
	}


}
export default Userform;
