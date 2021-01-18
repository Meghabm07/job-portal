import "../assets/sass/app.scss";
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/popper.js";

import React, { useEffect } from "react";
import { logOutUser, setCurrentUser } from "../actions/authAction";

import $ from "jquery";
import Category from "../components/admin/category/Category";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Job from "../components/admin/job/Job";
import Navbar from "../components/admin/layouts/Navbar";
import { PrivateRoute } from "./PrivateRoute";
import Sidebar from "../components/admin/layouts/Sidebar";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utility/setAuthToken";
import store from "../store";

//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  // decode token to get user data
  const decoded = jwt_decode(localStorage.jwtToken);

  // set current user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired Token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logOutUser);
    // redirect to login
    window.location.href = "/login";
  }
}
const AdminRoutes = ({ match }) => {
  useEffect(() => {
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <div id="content">
        <Navbar />
        <PrivateRoute
          exact
          path={`${match.path}/dashboard`}
          component={Dashboard}
        />
        <PrivateRoute exact path={`${match.path}/job`} component={Job} />
        <PrivateRoute
          exact
          path={`${match.path}/category`}
          component={Category}
        />
      </div>
    </div>
  );
};

export default AdminRoutes;
