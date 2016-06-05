
var App = React.createClass({
  displayName: "App",

  render() {
    return React.createElement(
      "myElement",
      null,
      React.createElement(Nav, { title: "Teste", link: "index.html" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(Title, { title: "Contato" }),
          React.createElement(Form, null)
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));