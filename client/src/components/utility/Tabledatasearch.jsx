import React from "react";

const Tabledatasearch = (props) => {

    // --------------------------------------Render Functions -----------------------------------------

    var rowCount;

    var search;

    var create;

    if (props.rowCount) {
        rowCount = (
            <select
                className="custom-select w-30"
                onChange={(e) => props.onRowCountChange(e)}
            >
                <option value="5" defaultValue> 5</option>
                <option value="10"> 10 </option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        );
    }

    if (props.search) {
        search = (
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onKeyUp={(e) => props.onSearch(e)}
                />
                <div className="input-group-append">
                    <span className="input-group-text">
                        <i className="fa fa-search" aria-hidden="true" />
                    </span>
                </div>
            </div>
        );
    }

    if (props.canCreate === 1) {
        create = (
            <button
                onClick={(e) => props.activeCreateForm(e)}
                type="button"
                className="btn btn-success btn-sm mt-1"
            >
                Add {props.buttonName}
            </button>
        );
    }
    return (
        <div className="row">
            <div className="col-md-1">{rowCount}</div>
            <div className="col-md-3">{search}</div>
            <div className="col-md-8 text-right">{create}</div>
        </div>
    );
}
export default Tabledatasearch;
