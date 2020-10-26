import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts != undefined) {
    return alerts.map((alert) => (
      <div key="" className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  } else {
    return <div></div>;
  }
};

Alert.propTypes = {};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
