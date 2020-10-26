import PropTypes from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../../actions/authAction.js";

const Navbar = ({ auth, logOutUser }) => {
  if (!auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-info">
          <i className="fa fa-align-left"></i>
        </button>
        <button
          className="btn btn-dark d-inline-block d-lg-none ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-align-justify"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-link" onClick={logOutUser}>
                Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOutUser })(Navbar);
