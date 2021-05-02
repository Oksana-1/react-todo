import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({label, important, done, onToggleImportantClick, onToggleDoneClick, onDeleteClick}) => {
	const classNames = `${important ? "redText": ""} ${done ? " crossOut": ""}`;
	return (
		<span>
			<span
				className={classNames}
				onClick={onToggleDoneClick}
			>
				{label}
			</span>
			<button onClick={onDeleteClick}>DEL</button>
			<button  onClick={onToggleImportantClick}>!</button>
		</span>
	);
};
export default ToDoItem;