import React from "react";
import "./SearchPanel.css"

const SearchPanel = () => {
	return (
		<div className="search-wrap">
			<input placeholder="search" type="search"/>
			<span>All&nbsp;</span>
			<span>Active&nbsp;</span>
			<span>Done</span>
		</div>
	);
}


export default SearchPanel;