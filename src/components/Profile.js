import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/authActions";
class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { user } = this.props.auth;
    return <div>Привет {user.name}!</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentUser })(Profile);
