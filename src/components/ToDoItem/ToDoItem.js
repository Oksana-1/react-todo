import React, { Component } from "react";
import "./ToDoItem.css";

export default class ToDoItem extends Component{
	onLabelClick = () => {
		console.log(this.props.todo.label);
	}
	render() {
		const { label, important} = this.props.todo;
		return (
			<span>
				<span
					className={ important ? "redText" : "" }
					onClick={this.onLabelClick}
				>
					{label}
				</span>
				<button>DEL</button>
				<button>!</button>
			</span>
		);
	}
}