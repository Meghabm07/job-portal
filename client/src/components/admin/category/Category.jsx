import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Form from "./components/Form";
import Table from "./components/Table";
import { activeToaster } from "../../utility/Alert";

const Category = (props) => {
	const [state, setstate] = useState({
		formActive: false,
		editFormActive: false,
		editCategoryId: "",
	});

	const {
		formActive,
		editFormActive,
		editCategoryId,
	} = state;

	useEffect(() => {

	}, [state])

	// --------------------------------------User Defined functions-----------------------------------------

	const activeAddCategoryForm = () => {
		setstate({
			...state,
			formActive: true,
		});
	};

	const closeForm = () => {
		setstate({
			...state,
			formActive: false,
			editCategoryId: "",
			editFormActive: false,
		});
	};

	const activateEditForm = (categoryId) => {
		setstate({
			...state,
			editFormActive: true,
			editCategoryId: categoryId,
			formActive: true,
		});
	};

	var component;

	if (formActive) {
		component = (
			<Form
				categoryId={editCategoryId}
				editFormActive={editFormActive}
				onActiveToster={activeToaster}
				closeForm={closeForm}
			/>
		);
	} else {
		component = (
			<Table
				onActiveEditForm={activateEditForm}
				onActiveToster={activeToaster}
				onAddCategory={activeAddCategoryForm}
			/>
		);
	}

	return (
		<Fragment>
			<ToastContainer
				enableMultiContainer
				containerId={"B"}
				position={toast.POSITION.TOP_RIGHT}
			/>
			<div className="row pt-5">
				<div className="col-md-11 m-auto">{component}</div>
			</div>
		</Fragment>
	);
};

Category.propTypes = {};

export default Category;
