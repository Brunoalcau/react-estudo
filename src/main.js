
var App = React.createClass({
  render(){
    return(
        <myElement>
          <Nav title="Teste" link="index.html" />
          <div className="container">
            <div className="row">
              <Title title="Contato"/>
              <Form />
            </div>
          </div>
        </myElement>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
