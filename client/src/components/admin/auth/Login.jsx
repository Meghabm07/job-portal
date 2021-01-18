import "../../../assets/sass/auth/auth.scss";

import React, { Fragment, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authAction";

export const Login = ({ loginUser, auth }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password, errors } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = (e) => {
		e.preventDefault();
		loginUser(formData);
	};

	const setErrors = (error) => {
		if (error.errors !== null && error.errors !== undefined) {
			setFormData({
				...formData,
				errors: error.errors[0].msg,
			});
		}
	};

	useEffect(() => {
		setErrors(auth.error ? auth.error : "");
	}, [auth]);

	if (auth.isAuthenticated) {
		return <Redirect to="/admin/dashboard" />;
	}

	return (
		<Fragment>
			<div className="container pt-5 pb-5 mb-5 mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-5 col-md-10 col-sm-12 m-auto">
						{errors ? (
							<div
								className="alert alert-danger alert-dismissible fade show"
								role="alert"
							>
								<button
									type="button"
									className="close"
									data-dismiss="alert"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
								<strong>{errors}</strong>
							</div>
						) : (
								""
							)}

						<div className="card login__card">
							<div className="card-header text-center">Admin Login</div>
							<div className="card-body p-4">
								<form onSubmit={(e) => onSubmit(e)}>
									<div className="form-group row">
										<div className="col-md-12">
											<label htmlFor="email" className="text-md-right">
												Email Address
                      </label>
											<input
												id="email"
												type="email"
												className="form-control  is-invalid "
												name="email"
												required
												value={email}
												onChange={(e) => onChange(e)}
												autoComplete="email"
												autoFocus
											/>

											<span className="invalid-feedback" role="alert">
												<strong>message</strong>
											</span>
										</div>
									</div>

									<div className="form-group row">
										<div className="col-md-12">
											<label htmlFor="password" className="text-md-right">
												Password
                      </label>
											<input
												id="password"
												type="password"
												className="form-control is-invalid "
												name="password"
												required
												value={password}
												onChange={(e) => onChange(e)}
												autoComplete="current-password"
											/>
											<span className="invalid-feedback" role="alert">
												<strong>Message</strong>
											</span>
										</div>
									</div>

									<div className="form-group row mb-0">
										<div className="col-md-12">
											<button className="btn btn-primary w-100">Login</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
