// Criar um elemento
var Nav = React.createClass({
  displayName: "Nav",


  render: function () {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { href: this.props.link, className: "navbar-brand" },
            this.props.title
          )
        )
      )
    );
  }
});

var Title = React.createClass({
  displayName: "Title",

  render() {
    let stylus = {
      color: '#777676',
      size: '35px'
    };
    return React.createElement(
      "h1",
      { style: stylus },
      this.props.title
    );
  }
});

var Button = React.createClass({
  displayName: "Button",

  getInitialState() {
    return {
      click: false
    };
  },
  toggleClick() {
    this.setState({
      click: !this.state.click
    });
  },
  render() {
    let btnClass = this.state.click ? 'btn btn-info' : 'btn btn-success';
    let title = this.state.click ? this.props.action : this.props.title;
    return React.createElement(
      "button",
      { onClick: this.toggleClick, className: btnClass },
      title
    );
  }
});

let InputForm = React.createClass({
  displayName: "InputForm",

  render() {
    return React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: this.props.for },
        this.props.name
      ),
      React.createElement("input", { type: this.props.type, className: "form-control", id: this.props.for, placeholder: this.props.name })
    );
  }
});
let TextArea = React.createClass({
  displayName: "TextArea",

  render() {
    return React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: this.props.for },
        this.props.name
      ),
      React.createElement("textArea", { className: "form-control", id: this.props.for, rows: this.props.rows })
    );
  }
});

let Form = React.createClass({
  displayName: "Form",

  render() {
    return React.createElement(
      "form",
      null,
      React.createElement(InputForm, { "for": "name", type: "text", name: "Nome" }),
      React.createElement(InputForm, { "for": "email", type: "text", name: "Email" }),
      React.createElement(TextArea, { "for": "messanger", name: "Messanger", rows: "4" }),
      React.createElement(Button, { title: "Send", action: "Loading..." })
    );
  }
});