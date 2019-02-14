import { Link } from 'react-router-dom';

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

	async handleSubmit(event) {
		event.preventDefault();
		console.log(event.target.username.value);
		console.log(event.target.password.value);
		const username = event.target.username.value;
		const password = event.target.password.value;
		//Use this.props.history.push(`url_path`); to redirect to another page
		const results = await fetch('/get_user').then(response => response.json());
		console.log(results);
		for (let user in results){
			if(results.hasOwnProperty(user)){
				const current_user = results[user];
				if(current_user["_id"] === username && current_user['password'] === password){
					this.props.history.push(`/home`);
				}
			}
		}
	}


	render() {
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>
					<p>Username: </p>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
					<br/>
					<p>Password</p>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
					<br/>
					<button type="submit" value="submit">Submit</button>
				</form>
				<br/>
				<Link to='/sign_up'>Sign up</Link>
			</div>
		);
	}


}
export default Userform;
