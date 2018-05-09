import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { loginUser } from "./actions/authActions";
import PrivateRoute from "./common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Login from "./components/Login";
import News from "./components/News";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

import "./App.css";

if (localStorage.user) {
  store.dispatch(
    loginUser({
      email: localStorage.email,
      password: localStorage.password
    })
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={News} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
