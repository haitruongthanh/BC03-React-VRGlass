/* eslint-disable no-useless-concat */
import React, { Component } from "react";
import { glassesData } from "./dataGlasses";
import "../Component/style.css";
import GlassList from "./GlassList";
import Model from "./Model";
import Header from "./Header";

export default class ChangingGlasses extends Component {
  state = {
    glassList: glassesData,
    glassItem: {},
    showDetail: false,
  };

  handleChooseGlass = (id) => {
    let cloneList = this.state.glassList;
    let index = cloneList.findIndex((item) => {
      return item.id === id;
    });
    if (index === -1) {
      this.setState({ showDetail: false });
    } else {
      this.setState({ glassItem: cloneList[index] });
      this.setState({ showDetail: true });
    }
  };

  render() {
    return (
      <div
        className="vglasses__app"
        // style={{ backgroundImage: "url(" + "./glassesImage/background.jpg" }}
      >
        <Header />
        <div className="container vglasses mt-5">
          <div className="row justify-content-between">
            <GlassList
              data={this.state.glassList}
              handleChooseGlass={this.handleChooseGlass}
            />
            <Model
              data={this.state.glassItem}
              showDetail={this.state.showDetail}
            />
          </div>
        </div>
      </div>
    );
  }
}
