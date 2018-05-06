import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
class Login extends Component {
  state = {
    name: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  // static getDerivedStateFromProps(nextProps, prevState) {
  //
  // }
  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/profile");
  };

  render() {
    const { isAuthenticated, errors } = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Войти</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Введите логин"
                  value={this.state.name}
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

              <input
                type="submit"
                onSubmit={this.onSubmit}
                className="btn btn-info btn-block mt-4"
              />
            </form>
            {/* {errors && <div>{errors}</div>} */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
