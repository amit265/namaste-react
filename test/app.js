const parent1 = React.createElement(
  "div",
  { id: parent },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1 - heading", key: 1 }, "this is h1 tag"),
    React.createElement("h2", { id: "h2 - heading", key: 2 }, "this is h2 tag"),
  ]), 
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", { id: "h1 - heading-2", key: 3 }, "this is h1 tag"),
    React.createElement("h2", { id: "h2 - heading-2", key: 4 }, "this is h2 tag"),
  ]) ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent1)