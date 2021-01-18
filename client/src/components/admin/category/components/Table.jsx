import React, { useEffect, useState } from "react";
import {
	deleteCategory,
	getCategoryList,
} from "../../../../actions/categoryAction";

import Pagination from "../../../utility/Pagination";
import PropTypes from "prop-types";
import Tabledatasearch from "../../../utility/Tabledatasearch";
import { connect } from "react-redux";
import findTotalPages from "../../../../utility/findTotalPages";

const Table = (props) => {
	const [state, setState] = useState({
		rowsCount: 5,
		keywords: "",
		currentPage: 1,
		lastPage: 1,
	});

	var { rowsCount, keywords, currentPage, lastPage } = state;

	useEffect(() => {
		getTableList();
	}, []);

	useEffect(() => {
		getTableList();
	}, [currentPage, keywords, rowsCount]);


	useEffect(() => {
		if (props.message !== '' || props.message !== undefined) {
			props.onActiveToster({
				message: props.message,
				status: "success"
			});
		}

		if (props.errors !== '' || props.errors !== undefined) {
			props.onActiveToster({
				message: props.errors,
				status: "error"
			});
		}

		getTableList();

	}, [props.message, props.error])


	const openEditForm = (id) => {
		props.onActiveEditForm(id);
	};

	const activeCreateForm = () => {
		props.onAddCategory();
	};

	const onSearch = (e) => {
		setState({
			...state,
			keywords: e.target.value,
		});
	};

	const onRowCountChange = (e) => {
		setState({
			...state,
			rowsCount: parseInt(e.target.value)
		});
	};

	const setNewPage = (newPage) => {
		setState({
			...state,
			currentPage: newPage,
			lastPage: findTotalPages(props.categoryData.total, rowsCount)
		})
	};

	const getTableList = () => {
		var defaultSetting = {
			noOfItems: rowsCount,
			pageNumber: currentPage,
			keywords: keywords,
		};
		props.getCategoryList(defaultSetting);
	}

	var rows;

	if (props.categoryData !== undefined) {

		if (props.categoryData.categories.length > 0) {

			rows = (
				<tbody>
					{props.categoryData.categories.map((category, i) => {
						return (
							<tr key={i}>
								<td>{i + 1}.</td>
								<td>{category.name}</td>
								<td>
									<a className="cursor__pointer" onClick={() => openEditForm(category._id)}>
										<i className="fa fa-edit" />
									</a>
								</td>
								<td>
									<a className="cursor__pointer" onClick={() => props.deleteCategory(category._id)}>
										<i className="fa fa-trash" />
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			);
		} else {
			rows = (
				<tbody>
					<tr>
						<td colSpan="6" className="text-info text-bold text-center">
							No Data
					</td>
					</tr>
				</tbody>
			);
		}
	} else {
		rows = (
			<tbody>
				<tr>
					<td colSpan="6" className="text-info text-bold text-center">
						No Data
					</td>
				</tr>
			</tbody>
		);
	}

	return (
		<div className="card card__shadow" >
			<div className="card-header">
				<div>
					<Tabledatasearch
						canCreate={true}
						search={true}
						rowCount={true}
						onSearch={(e) => onSearch(e)}
						onRowCountChange={(e) => onRowCountChange(e)}
						activeCreateForm={activeCreateForm}
						buttonName="Category"
					/>
				</div>
			</div>
			<div className="card-body table-responsive">
				<table className="table table-hover table-bordered">
					<thead>
						<tr>
							<th>#</th>
							<th className="w-25">Name</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					{rows}
				</table>
			</div>
			<div className="card-footer clearfix">
				<Pagination
					currentPage={props.categoryData ? props.categoryData.page : currentPage}
					lastPage={props.categoryData ? findTotalPages(props.categoryData.total, rowsCount) : lastPage}
					setPage={setNewPage} />
			</div>
		</div>
	);
};

Table.propTypes = {
	category: PropTypes.object,
};

const mapStateToProps = (state) => ({
	message: state.category.message,
	errors: state.category.error,
	categoryData: state.category.categoryData,
});

export default connect(mapStateToProps, {
	getCategoryList,
	deleteCategory,
})(Table);
