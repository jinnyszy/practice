import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "own thing"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "corgi",
    }),
    React.createElement(Pet, {
      name: "Kiki",
      animal: "cat",
      breed: "bengal",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
