import React, { Component } from 'react';
// you need to import elements from other components & is rendered on ln 23
import Controls from './Controls';
import Face from './Face';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // when you change this value the screen will rerender
      feeling: 'happy'
    };
  }

  render() {
    return (
      // this is a ternary expression (conditional) checking if there is a state - if there is not the class will default to App, as seen after the colon
      <div className={this.state.feeling ? this.state.feeling : "App"}>
        <p className="App-intro">
          Happy coding!
        </p>
        <Face /> 
        <Controls />
      </div>
    );
  }
}

export default App;
