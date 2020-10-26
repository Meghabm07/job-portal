import PieChart from "./components/PieChart";
import PropTypes from "prop-types";
import React from "react";
import ReportCards from "./components/ReportCards";
import Todolist from "./components/TodoList";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authAction";

const Dashboard = (props) => {
  return (
    <section className="content">
      <ReportCards />
      <div className="row">
        <div className="col-md-6">
          <PieChart />
        </div>
        <div className="col-md-6">
          <Todolist />
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Dashboard);
