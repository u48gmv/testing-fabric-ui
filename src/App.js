import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Grid from "./Grid";
import LeftNavigation from "./LeftNavigation";
import {
  DefaultButton,
  PrimaryButton,
  Stack,
  DefaultPalette,
  Fabric
} from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";
import { Icon } from "office-ui-fabric-react/lib/Icon";

import "office-ui-fabric-core/dist/css/fabric.min.css";

import "./App.css";

initializeIcons("./css/icons/");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _alertClicked = () => {
    console.log("click me");
  };

  render() {

    return (
      <>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row kntk-canvas">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-fontColor-themePrimary">
              <Header></Header>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm2 ms-fontColor-themePrimary">
              <LeftNavigation></LeftNavigation>
            </div>
            <div className="ms-Grid-col ms-sm10 ms-fontColor-themePrimary">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-fontColor-themePrimary">
                  <Grid></Grid>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-fontColor-themePrimary">
                  <Grid></Grid>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-fontColor-themePrimary">
              <Footer></Footer>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
