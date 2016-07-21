import React from 'react';
import Login from './login';
import Main from './main';
import Search from './search';
import Cloud from './cloud';

class App extends React.Component{

  render() {
    return (
      <div>
      <div className="container">
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
             <Login/>
          </nav>
          <Main/>

          <Search history={this.props.history}/>
          <Cloud/>

        </div>
      </div>
      <div className="art">
      </div>
      </div>
    );
  }

}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App;


             // <img className="bottom" src="./blueprint3.png" />
