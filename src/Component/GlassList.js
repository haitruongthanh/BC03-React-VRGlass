/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class GlassList extends Component {
  render() {
    return (
      <div className="col-6 vglasses__left">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-2">Virtual Glasses</h1>
          </div>
        </div>
        <div className="row" id="vglassesList">
          {this.props.data.map((item, i) => {
            return (
              <GlassItem
                data={item}
                key={i}
                handleChooseGlass={this.props.handleChooseGlass}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
