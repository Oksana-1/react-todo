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
		</div>
	);
}


export default SearchPanel;