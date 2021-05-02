import React from "react";

const AppHeader = ({todoCount, doneCount}) => {
	return (
		<div>
			<h1>To Do</h1>
			<p>Summary: <span>{todoCount} more to do</span> <span>({doneCount} items done)</span></p>
		</div>
	);
}

export default AppHeader;