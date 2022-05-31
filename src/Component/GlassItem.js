/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    // console.log(this.props.data);
    let { id, url } = this.props.data;
    return (
      <div className="col-4">
        <label htmlFor={`btn- + ${id}`}>
          <img src={url} className="glasses" />
        </label>
        <button
          type="button"
          className="btn btn-primary"
          id={`btn- + ${id}`}
          onClick={() => {
            console.log(this.props.data);
            this.props.handleChooseGlass(id);
          }}
        ></button>
      </div>
    );
  }
}
