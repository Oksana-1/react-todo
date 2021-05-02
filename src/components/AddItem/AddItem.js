import React, { Component } from "react";
import "./AddItem.css";

export default class AddItem extends Component {
	state = {
		label: ""
	}
	addItem = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.label);
		this.setState({
			label: "",
		})
	}
	onInputChange = (e) => {
		this.setState({
			label: e.target.value
		})
	}
	render() {
		return (
			<form onSubmit={ this.addItem }>
				<input
					type="text"
					placeholder="New to do"
					onChange={ this.onInputChange }
					value={this.state.label}
				/>
				<button>ADD</button>
			</form>
		);
	}
}
