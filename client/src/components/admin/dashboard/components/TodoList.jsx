import React from "react";

const Todolist = () => {
  return (
    <div className="card card__shadow">
      <div className="card-header">
        <h5 className="card-title mb-0">
          <i className="fa fa-list" aria-hidden="true"></i> To Do List
        </h5>
      </div>
      <div className="card-body p-2">
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
