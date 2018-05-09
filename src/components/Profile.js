import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../actions/profileActions";
import Social from "./Social";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";
class Profile extends Component {
  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) this.props.getCurrentProfile(user.id);
  }
  render() {
    const { city, languages, social } = this.props.profile.profile;
    const { error, loading } = this.props.profile;
    const profile = (
      <div>
        <h3>Город: {city}</h3>
        <h3>Знание языков:</h3>
        <ul className="list-group">
          {languages &&
            languages.map((item, i) => (
              <li key={i} className="list-group">
                {item}
              </li>
            ))}
        </ul>
        <h3>Ссылки:</h3>
        <ul className="list-group">
          {social &&
            social.map((item, i) => (
              <Social key={i} link={item.link} label={item.label} />
            ))}
        </ul>
      </div>
    );
    const profileNotFound = <div>Пользователь не найден</div>;
    if (loading) {
      return <Spinner />;
    } else {
      return <div>{error ? profileNotFound : profile} </div>;
    }
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
