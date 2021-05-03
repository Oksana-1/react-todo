import React from "react";
import "./SearchPanel.css"

const SearchPanel = ({onSearch, searchString}) => {
	return (
		<div className="search-wrap">
			<input
				placeholder="search"
				type="search"
				onChange={onSearch}
				value={searchString}
			/>
			<span>All&nbsp;</span>
			<span>Active&nbsp;</span>
			<span>Done</span>
		</div>
	);
}


export default SearchPanel;