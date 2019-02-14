import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const React = require('react');

const card = {
  width: 300,
    minWidth: 275,
  };
const h1 = {
  color: "black",
  fontSize: "40px",
  };
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
      <br/>
      <Grid container direction= "column" justify="center" alignItems="center"> 
			<Card style={card}>
        <CardContent>
        <Grid container direction= "column" justify="center" alignItems="center" >
        <Typography variant="h3"> W App </Typography>
        <img src= "https://www.logolynx.com/images/logolynx/8f/8f0a16721f32e2ea2a2caf8d231013b5.png" height="100" width="100"/>
				<form  onSubmit = {this.handleSubmit}>
             
					<p>Username: </p>
					<Input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
					<br/>
					<p>Password</p>
					<Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
					<br/>
          <br/>
          <Grid container direction= "column" justify="center" alignItems="center"> 
					<Button type="submit" value="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
				</form>
        
				<Link to='/sign_up'>Sign up</Link>
				<br/>
      </Grid>

      </CardContent>
			</Card>
      </Grid>
      </div>
		);
	}


}
export default Userform;
