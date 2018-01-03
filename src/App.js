import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const names = ["Amaresh", "Jijo", "Mansoor", "Manjunath", "Bhagirathi", "Shewtah", "Thanjaya", "Vishrut"];
const list_names = names.map((name) =>
  <li>{name}</li>
);

class AssociateNames extends React.Component {
  render(){
    return (
      <div align="left">
        Listing NHT Associates Names : 
        <br/>
        <ol> {list_names} </ol>
      </div>  
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div align="right">
        <h2>Current Time(India) :</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        <div align="center">
          <Clock />
        </div> 
        <AssociateNames />
      </div>
    );
  }
}

export default App;
