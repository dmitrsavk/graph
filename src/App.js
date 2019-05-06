import React, { Component } from "react";
import "./App.css";
import Canvas from "./Canvas";
import { simpleAction } from "./actions/simpleAction";
import { connect } from "react-redux";

const head = "index";

const graph = {
  index: ["foo", "bar", "lol"],
  foo: ["bar", "baz"],
  bar: ["baz"],
  lol: ["lol1", "lol2"],
  lol1: ["lol3"],
  lol3: ["4"],
  lol2: ["5"]
};

class App extends Component {
  onButtonClick = event => {
    this.props.simpleAction();
  };

  render() {
    console.log("render app");
    return (
      <div>
        <Canvas array={this.props.array}/>
        <button onClick={this.onButtonClick}>
          {JSON.stringify(this.props.array)}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  array: state.simpleReducer.array
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
