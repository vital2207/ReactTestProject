import React from "react";
import PropTypes from "prop-types";
const Social = props => {
  return (
    <li className="list-group-item">
      <a href={props.link} target="_blank">
        <i className={`fab fa-${props.label}`} />
      </a>
    </li>
  );
};

Social.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default Social;
