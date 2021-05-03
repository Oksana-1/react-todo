import React from "react";
import "./StatusFilter.css";

const StatusFilter = ({ filterString, onFilter }) => {
	const filters = [
		{label: "All", value: ""},
		{label: "Active", value: "active"},
		{label: "Done", value: "done"}
	];
	const filterButtons = filters.map((filter) => (
		<span
			className={`filter-btn ${filter.value === filterString ? "active" : ""}`}
			key={filter.label}
			onClick={() => onFilter(filter.value)}
		>
			{filter.label}
		</span>
	))
	return (
		<div>{filterButtons}</div>
	)
};
export default StatusFilter;