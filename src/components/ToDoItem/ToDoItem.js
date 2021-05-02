import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({label, important, done, onToggleImportantClick, onToggleDoneClick, onDeleteClick}) => {
	const classNames = `item-label${important ? " redText": ""} ${done ? " crossOut": ""}`;
	return (
		<div className="item-wrap">
			<span
				className={classNames}
				onClick={onToggleDoneClick}
			>
				{label}
			</span>
			<div className="buttons-wrap">
				<button onClick={onDeleteClick}>DEL</button>
				<button  onClick={onToggleImportantClick}>!</button>
			</div>
		</div>
	);
};
export default ToDoItem;