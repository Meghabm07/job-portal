import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AdminRoutes from "./routes/AdminRoutes";
import Login from "./components/admin/auth/Login";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/admin" component={AdminRoutes} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
