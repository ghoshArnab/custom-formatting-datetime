import React from "react";
import ReactDOM from "react-dom";
import { GTab } from "./guide";
import { createDateFormatter } from "./customFormat";

class App extends React.Component {
  state = {
    input: ""
  };

  onChangeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    const { input } = this.state;
    const date = new Date(Date.UTC(1984, 0, 17, 16, 13, 37, 0));
    /* 01 January, 2001 1:00:00 AM */
    const output = createDateFormatter({
      // numeric hour
      h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
    })(date, input);

    return (
      <div>
        <h2>Custom DateTime and Date formatting</h2>

        <input
          type="text"
          name="input" // this should be same as "input"
          value={input}
          onChange={this.onChangeHandler}
        />

        <div>
          <br />
          Format String : {input}
          <br />
          JS date String : {date.toString()}
          <br />
          Formatted date : {output}
        </div>
        <br />
        <GTab />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
