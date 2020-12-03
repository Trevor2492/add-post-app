import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(post); //this is what kicks off the action which gets sent to the reducer
	}

	
	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label><br></br>
						<input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
					</div>
					<div>
						<label>Body: </label><br></br>
						<textarea name="body" onChange={this.onChange} value={this.state.body}/>
					</div><br></br>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

Postform.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);