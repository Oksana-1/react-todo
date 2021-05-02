import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({todos, onDelete, onToggleDone, onToggleImportant}) => {
	const itemElements = todos.map((todo) => {
		const { id, ...itemProps} = todo;
		return (
			<li key={id}>
				<ToDoItem
					{...itemProps}
					onDeleteClick={() => onDelete(id)}
					onToggleDoneClick={() => onToggleDone(id)}
					onToggleImportantClick={() => onToggleImportant(id)}
				/>
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