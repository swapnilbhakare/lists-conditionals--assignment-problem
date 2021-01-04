import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    input: "",
  };
  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };
  removeCharater = (index) => {
    const text = this.state.input.split("");
    text.splice(index, 1);
    const update = text.join("");
    this.setState({ input: update });
  };
  render() {
    const characterList = this.state.input
      .split("")
      .map((singleChar, index) => {
        return (
          <Char
            character={singleChar}
            singleChar
            key={index}
            clicked={() => this.removeCharater(index)}
          />
        );
      });
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.input}
        />
        <p>{this.state.input} </p>
        <div>
          <Validation inputSize={this.state.input.length} />
        </div>
        <div>{characterList}</div>
      </div>
    );
  }
}

export default App;
