import React from "react";
import "./AppHeader.css";

const AppHeader = ({todoCount, doneCount}) => {
	return (
		<div>
			<h1>To Do List</h1>
			<div className="sub-header">
				Summary:
				<span> <b>{todoCount}</b> more to do </span>
				<span>(<b>{doneCount}</b> items done)</span>
			</div>
		</div>
	);
}

export default AppHeader;