import React from "react";
//const isBrowser = typeof window !== "undefined";
//const TypeIt = isBrowser ? import("typeit") : undefined;

if (typeof window !== `undefined`) {
  const TypeIt = require("typeit")
}

class Typed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Typed;
