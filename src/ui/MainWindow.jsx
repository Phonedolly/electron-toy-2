import { ipcRenderer } from "electron";
import React, { Component } from "react";


export default class MainWindow extends Component {
  render() {
    return (
      <>
        <button onClick={() => {ipcRenderer.send('maximize-window', 0)}}>Maximize</button>
        <button onClick={() => alert("Minimize!")}>Minimize</button>
      </>
    );
  }
}
