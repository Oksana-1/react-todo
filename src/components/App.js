import React, { Component } from "react";
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import ToDoList from "./ToDoList/ToDoList";

export default class App extends Component {
	todos = ["Wake up",  "Drink coffee", "Eat sandwich"];
	idCounter = 0;
	createTodoItem = (label) => ({
		id: this.idCounter++,
		label,
		important: false,
		done: false,
 	});
	toggleItemProperty = (items, id, propName) => {
		const index = items.findIndex(item => item.id === id);
		return  [
			...items.slice(0, index),
			{...items[index], [propName]: !items[index][propName] },
			...items.slice(index + 1)
		];
	}
	state = {
		items: this.todos.map(todo => this.createTodoItem(todo))
	}
	onToggleImportant = (id) => {
		this.setState(({items}) => {
			return {
				items: this.toggleItemProperty(items, id, "important")
			};
		});
	}
	onToggleDone = (id) => {
		this.setState(({items}) => {
			return {
				items: this.toggleItemProperty(items, id, "done")
			};
		});
	}
	onDelete = (id) => {
		this.setState(({items}) => {
			const index = items.findIndex(item => item.id === id);
			return {
				items: [
					...items.slice(0, index),
					...items.slice(index + 1)
				]
			};
		});
	}
	render() {
		const items = this.state.items;
		const doneCount = items.filter((item) => item.done).length;
		const todoCount = items.length - doneCount;
		return (
			<div>
				<AppHeader doneCount={doneCount} todoCount={todoCount}/>
				<SearchPanel/>
				<ToDoList
					todos={ items }
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					onDelete={this.onDelete}
				/>
			</div>
		);
	}
};