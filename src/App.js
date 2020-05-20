import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color: 'blue', 
      width: 100px
    }
  }

  changeColor(){
    this.setState({
      color: 'red'
    });
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.changeColor()}
          style={{color: this.state.color}}
        >CLICK ME!</button>
      </div>
    );
  }
}

export default App;
