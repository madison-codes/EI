import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      feeling: 'happy'
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-main-face">😊</h1>
        <p className="App-intro">
          Happy coding!
        </p>
      </div>
    );
  }
}

export default App;
