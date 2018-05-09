import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/profile");
    if (nextProps.auth.error)
      this.setState({ error: nextProps.auth.error, password: "" });
  };

  render() {
    const { error } = this.state;
    const { loading } = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Войти</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Введите email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Введите пароль"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              {error && (
                <div>Имя пользователя или пароль введены не верно.</div>
              )}
              {loading ? (
                <Spinner />
              ) : (
                <input
                  type="submit"
                  onSubmit={this.onSubmit}
                  className="btn btn-info btn-block mt-4"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
