import React from "react";
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import ToDoList from "./ToDoList/ToDoList";

const App = () => {
	const items = [{
		id: 1,
		label: "Wake up",
		important: false
	},
	{
		id: 2,
		label: "Drink coffee",
		important: true
	},
	{
		id: 3,
		label: "Eat sandwich",
		important: false
	},];
	return (
		<div>
			<AppHeader/>
			<SearchPanel/>
			<ToDoList todos={items}/>
		</div>
	);
};

export default App;