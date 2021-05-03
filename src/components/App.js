import React, { Component } from "react";
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import StatusFilter from "./StatusFilter/StatusFilter";
import ToDoList from "./ToDoList/ToDoList";
import AddItem from "./AddItem/AddItem";
import "./App.css";

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
		items: this.todos.map(todo => this.createTodoItem(todo)),
		searchString: "",
		filterString: ""
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
	onAdd = (label) => {
		this.setState(({items}) => {
			return {
				items: [...items, this.createTodoItem(label)]
			};
		});
	}
	onSearch = (e) => {
		this.setState ({
			searchString: e.target.value
		});
	}
	onFilter = (filterString) => {
		this.setState ({
			filterString
		});
	}
	render() {
		const {items, searchString, filterString} = this.state;
		const doneCount = items.filter((item) => item.done).length;
		const todoCount = items.length - doneCount;
		const filteredItems = items
			.filter(
			(item) => item.label.toLowerCase().includes(searchString.toLowerCase()))
			.filter((item) => {
				if (filterString === "active" ) {
					return  !item.done
				} else if  (filterString === "done") {
					return  item.done;
				}
				return true;
			})
		;
		return (
			<div className="container-500">
				<AppHeader doneCount={doneCount} todoCount={todoCount}/>
				<div className="search-filter-wrap">
					<SearchPanel
						onSearch={this.onSearch}
						searchString={searchString}
					/>
					<StatusFilter
						onFilter={this.onFilter}
						filterString={filterString}
					/>
				</div>
				<ToDoList
					todos={ filteredItems }
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					onDelete={this.onDelete}
				/>
				<AddItem
					onSubmit={this.onAdd}
				/>
			</div>
		);
	}
};