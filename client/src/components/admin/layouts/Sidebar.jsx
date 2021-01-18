import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { logOutUser } from "../../../actions/authAction.js";

export const Sidebar = ({ logOutUser, auth }) => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h5 className="mb-0">Job Portal</h5>
      </div>

      <div className="sidebar-profile">
        <div className="d-flex bd-highlight">
          <div className=" bd-highlight">
            <img
              className="mr-3 side-user-img ml-3"
              src="http://codervent.com/bulona/demo/assets/images/avatars/avatar-13.png"
              alt="user avatar"
            />
          </div>

          <div className="align-self-center bd-highlight">
            <h5 className="mb-0">{auth.user ? auth.user.name : ""}</h5>
          </div>
        </div>
      </div>

      <ul className="list-unstyled components">
        <li className="">
          <Link to="/admin/dashboard">
            <i className=" fa fa-tachometer" aria-hidden="true"></i> &nbsp;
            Dashboard
          </Link>
        </li>

        <li className="">
          <Link to="/admin/job">
            <i className=" fa fa-database" aria-hidden="true"></i> &nbsp; Job
          </Link>
        </li>

        <li className="">
          <Link to="/admin/category">
            <i className=" fa fa-database" aria-hidden="true"></i> &nbsp;
            Category
          </Link>
        </li>

        <li className="">
          <a href="#levelMenu" data-toggle="collapse">
            <i className="fa fa-list" aria-hidden="true"></i> &nbsp; Levels
            <i className="fa fa-angle-down pull-right mt-1"></i>
          </a>

          <ul className="collapse list-unstyled" id="levelMenu">
            <li className="">
              <a href="/#">
                <i className="fa fa-list" aria-hidden="true"></i> &nbsp; Levels
                List
              </a>
            </li>

            <li className="">
              <a href="/#">
                <i className="fa fa-list" aria-hidden="true"></i> &nbsp; Levels
                Exercise
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
Sidebar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOutUser })(Sidebar);
