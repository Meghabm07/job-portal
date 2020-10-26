import React from "react";

const ReportCards = () => {
  return (
    <div className="row mb-5">
      <div className="col-lg-3 col-6">
        <div className="card card__shadow gradient-deepblue">
          <div className="card-body">
            <h5 className="text-white mb-0">
              9526{" "}
              <span className="float-right">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </h5>
            <div className="progress my-3">
              <div className="progress-bar"></div>
            </div>
            <p className="mb-0 text-white small-font">
              Total Subscribers{" "}
              <span className="float-right">
                +4.2% <i className="zmdi zmdi-long-arrow-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="card card__shadow gradient-orange">
          <div className="card-body">
            <h5 className="text-white mb-0">
              8323{" "}
              <span className="float-right">
                <i className="fa fa-usd"></i>
              </span>
            </h5>
            <div className="progress my-3">
              <div className="progress-bar"></div>
            </div>
            <p className="mb-0 text-white small-font">
              Total Revenue{" "}
              <span className="float-right">
                +1.2% <i className="zmdi zmdi-long-arrow-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="card card__shadow gradient-ohhappiness">
          <div className="card-body">
            <h5 className="text-white mb-0">
              6200{" "}
              <span className="float-right">
                <i className="fa fa-eye"></i>
              </span>
            </h5>
            <div className="progress my-3">
              <div className="progress-bar"></div>
            </div>
            <p className="mb-0 text-white small-font">
              Visitors{" "}
              <span className="float-right">
                +5.2% <i className="zmdi zmdi-long-arrow-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="card card__shadow gradient-ibiza">
          <div className="card-body">
            <h5 className="text-white mb-0">
              5630{" "}
              <span className="float-right">
                <i className="fa fa-envira"></i>
              </span>
            </h5>
            <div className="progress my-3">
              <div className="progress-bar"></div>
            </div>
            <p className="mb-0 text-white small-font">
              Messages{" "}
              <span className="float-right">
                +2.2% <i className="zmdi zmdi-long-arrow-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCards;
