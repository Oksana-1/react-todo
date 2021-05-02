import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

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
		<ul className="item-list">
			{itemElements}
		</ul>
	);
};

export default ToDoList;