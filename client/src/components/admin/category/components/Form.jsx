import React, { useEffect, useState } from "react";
import {
	addCategory,
	editCategory,
	getCategoryList,
	updateCategory
} from "../../../../actions/categoryAction";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Form = (props) => {
	const [formData, setformData] = useState({
		name: "",
		errors: "",
		editData: [],
		rowsCount: 10,
		buttonName: '',
		formTitle: "",
		keywords: "",
		currentPage: 1,
		lastPage: 1
	})

	useEffect(() => {
		if (props.categoryId !== "" && props.editFormActive) {
			props.editCategory(props.categoryId);
		}
	}, [])

	useEffect(() => {
		if (props.message !== '' || props.message !== undefined) {
			props.onActiveToster({
				message: props.message,
				status: "success"
			});
		}

		if (props.editData) {
			setformData({
				...formData,
				name: props.editData ? props.editData.name : '',
			});
		}

		if (props.errors !== '' || props.errors !== undefined) {
			props.onActiveToster({
				message: props.errors,
				status: "error"
			});

		}

	}, [props])

	// --------------------------------------User Defined Functions -----------------------------------------

	const onClose = () => {
		props.closeForm();
	}

	const onSubmit = (event) => {
		event.preventDefault();

		var data = {
			name: formData.name
		}

		if (props.categoryId !== "" && props.editFormActive) {
			props.updateCategory(data, props.categoryId);
		} else {
			props.addCategory(data);
		}
	}

	const setValue = (event) => {
		event.persist();
		setformData({ ...formData, [event.target.name]: event.target.value });
	}

	// --------------------------------------Render Functions -----------------------------------------

	var errorData = [];

	if (props.errors !== undefined) {
		if (typeof props.errors == 'object' && props.errors.length > 0) {

			Object.keys(props.errors).forEach((key) => {
				errorData[props.errors[key].param] = props.errors[key].msg;
			});

		}
	}


	return (
		<div className="card card__shadow card-secondary">
			<div className="card-header">
				<h5 className="card-title mb-0">{(props.categoryId !== "" && props.editFormActive) ? 'Edit Category' : 'New Category'}</h5>
			</div>
			<form role="form">
				<div className="card-body">
					<div className="form-group">
						<label htmlFor="exampleInputName">Name</label>
						<input
							onChange={(e) => setValue(e)}
							type="text"
							name="name"
							value={formData.name}
							className="form-control"
							id="exampleInputName"
							placeholder="Enter Name"
						/>
						<span className="text-danger">
							{errorData.name ? errorData.name : ""}
						</span>
					</div>
				</div>

				<div className="card-footer text-right">
					<button
						type="button"
						onClick={(e) => onSubmit(e)}
						className="btn btn-primary"
					>
						{(props.categoryId !== "" && props.editFormActive) ? 'Update' : 'Submit'}
					</button>
                        &nbsp; &nbsp;
                        <button
						type="button"
						onClick={() => onClose()}
						className="btn btn-secondary"
					>
						Close
                        </button>
				</div>
			</form>
		</div>
	);
};


Form.propTypes = {
	category: PropTypes.object
};

const mapStateToProps = state => ({
	message: state.category.message,
	errors: state.category.error,
	editData: state.category.editData
});

export default connect(mapStateToProps, {
	getCategoryList,
	addCategory,
	editCategory,
	updateCategory
})(Form);

