import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({todo}) => {
	return (
		<span className={todo.important ? "redText" : ""}>
			{todo.label}
		</span>
	);
};

export default ToDoItem;