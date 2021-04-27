import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({todos}) => {
	const itemElements = todos.map((todo) => {
		const { id, ...itemProps} = todo;
		return (
			<li key={id}>
				<ToDoItem todo={itemProps}/>
			</li>
		)
	});
	return (
		<ul>
			{itemElements}
		</ul>
	);
};

export default ToDoList;