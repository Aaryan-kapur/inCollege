import React, { Component } from "react";
import Nav from "./Nav";
import Upper from "./Upper";
import BottomNav from "./BottomNav";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Upper />
        <BottomNav />
      </React.Fragment>
    );
  }
}

export default App;
