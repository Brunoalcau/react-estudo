// Criar um elemento
var Nav = React.createClass({

  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a href={this.props.link} className="navbar-brand">
              {this.props.title}
            </a>
          </div>
        </div>
      </nav>
    );
  }
});

var Title = React.createClass({
  render(){
    let stylus = {
      color: '#777676',
      size: '35px'
    }
    return(
      <h1 style={stylus}>{this.props.title}</h1>
    );
  }
});

var Button = React.createClass({
  getInitialState(){
    return {
      click: false
    };
  },
  toggleClick(){
    this.setState({
      click: !this.state.click
    });
  },
  render(){
    let btnClass = this.state.click ? 'btn btn-info' : 'btn btn-success';
    let title = this.state.click ? this.props.action : this.props.title;
    return(
      <button onClick={this.toggleClick} className={ btnClass }>{ title }</button>
    );
  }
});

let InputForm = React.createClass({
  render(){
    return(
      <div className="form-group">
        <label htmlFor={this.props.for}>{this.props.name}</label>
        <input type={this.props.type} className="form-control" id={this.props.for} placeholder={this.props.name} />
      </div>
    );
  }
});
let TextArea = React.createClass({
  render(){
    return(
      <div className="form-group">
        <label htmlFor={this.props.for}>{this.props.name}</label>
        <textArea className="form-control" id={this.props.for} rows={this.props.rows} />
      </div>
    );
  }
});

let Form = React.createClass({
  render(){
    return (
      <form>
        <InputForm for="name" type="text" name="Nome" />
        <InputForm for="email" type="text" name="Email" />
        <TextArea for="messanger" name="Messanger" rows="4" />
        <Button title="Send" action="Loading..."/>
      </form>
    );
  }
});
