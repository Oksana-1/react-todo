import React, { Component } from "react";
import "./ToDoItem.css";

export default class ToDoItem extends Component{
	render() {
		const { label, important} = this.props.todo;
		return (
			<span className={ important ? "redText" : "" }>
			{label}
		</span>
		);
	}
}