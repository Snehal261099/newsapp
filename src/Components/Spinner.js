import React, { Component } from "react";
import PropTypes from "prop-types";
import loading from "./loading.gif";

export default class Spinner extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    );
  }
}
