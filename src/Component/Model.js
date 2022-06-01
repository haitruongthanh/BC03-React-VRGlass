/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-concat */
import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let { url, name, price, desc } = this.props.data;

    return (
      <div className="col-5 vglasses__right p-0">
        <div className="vglasses__card">
          <div className="mb-2 text-right mt-2 mr-2"></div>
          <div
            className="vglasses__model"
            id="avatar"
            style={{ backgroundImage: "url(" + "./glassesImage/model.jpg" }}
          >
            <div id="avatarHasGlass">
              <img
                src={url}
                style={{ display: this.props.showDetail ? "block" : "none" }}
              />
            </div>
          </div>
          <div
            id="glassesInfo"
            className="vglasses__info"
            style={{ display: this.props.showDetail ? "block" : "none" }}
          >
            <h4>{name}</h4>
            <div className="price d-flex">
              <p>
                $<span>{price}</span>
              </p>
              <span className="stock">Stocking</span>
            </div>
            <div className="describe">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
